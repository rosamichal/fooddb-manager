import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import "./Form.css";

const apiKey = process.env.REACT_APP_API_KEY || "test";

function Form() {
    const [name, setName] = useState("");
    const [protein, setProtein] = useState("");
    const [fat, setFat] = useState("");
    const [carbohydrates, setCarbohydrates] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            setIsProcessing(true);
            const newIngredient = {
                name,
                protein: parseFloat(protein),
                fat: parseFloat(fat),
                carbohydrates: parseFloat(carbohydrates),
            };
            const response = await axios.post(
                `https://fooddb-node.herokuapp.com/api/ingredients?apiKey=${apiKey}`,
                newIngredient
            );
            console.log("OK :) ", response);
            toast.success(`Pomyślnie dodano skladnik '${name}'`);

            setName("");
            setProtein("");
            setFat("");
            setCarbohydrates("");
        } catch (error) {
            console.log(error);
            toast.error(`Nie udało się dodać składnika '${name}'`);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form className="Form" onSubmit={submitHandler}>
            <input
                className="name-input"
                placeholder="Nazwa składnika..."
                onChange={(event) => setName(event.target.value)}
                required
                value={name}
                disabled={isProcessing}
            />
            <label htmlFor="t-input">Tłuszcz:</label>
            <input
                id="t-input"
                required
                type="number"
                step="0.1"
                placeholder="tłuszcz"
                onChange={(event) => setFat(event.target.value)}
                value={fat}
                disabled={isProcessing}
            />
            <label htmlFor="w-input">Węglowodany:</label>
            <input
                id="w-input"
                required
                type="number"
                step="0.1"
                placeholder="węglowodany"
                onChange={(event) => setCarbohydrates(event.target.value)}
                value={carbohydrates}
                disabled={isProcessing}
            />
            <label htmlFor="b-input">Białko:</label>
            <input
                id="b-input"
                required
                type="number"
                step="0.1"
                placeholder="białko"
                onChange={(event) => setProtein(event.target.value)}
                value={protein}
                disabled={isProcessing}
            />
            <div className="buttons-container">
                <button disabled={isProcessing}>
                    {isProcessing ? "Proszę czekaj..." : "Dodaj"}
                </button>
            </div>
        </form>
    );
}

export default Form;
