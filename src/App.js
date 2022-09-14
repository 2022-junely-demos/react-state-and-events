import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(42);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={handleIncrement}>➕</button>
        <button
          onClick={() => {
            setCounter((prevState) => prevState - 1);
          }}
        >
          ➖
        </button>
      </div>
    </div>
  );
}

export default App;
