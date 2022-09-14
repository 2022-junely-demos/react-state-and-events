import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const [counter, setCounter] = useState(42);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
