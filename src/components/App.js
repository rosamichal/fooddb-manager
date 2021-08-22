import './App.css';
import Form from './Form';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-header">Dodaj składnik</h1>
      </header>
      <main>
        <Form />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                background: '#E7F2DA',
                color: '#006E00',
              },
              iconTheme: {
                primary: '#006E00',
              },
            },
            error: {
              style: {
                background: '#FFEBE6',
                color: '#E54D2B',
              },
            },
          }} />
      </main>
    </div>
  );
}

export default App;
