import React from 'react';
import { useState } from 'react';
import './Editor.css';

export default function Editor({ title, setTitle, setColors }) {
  const [currentColor, setCurrentColor] = useState('');
  const handleSaveColor = () => {
    // add the currentcolor to the colors array

    // this would push the color to the front of the array
    setColors((prevColors) => [currentColor, ...prevColors]);

    // this would push the color to the back of the array
    // setColors((prevColors) => [...prevColors, currentColor]);

    // reset the current color back to an empty string (clear out input)
    setCurrentColor('');
  };
  return (
    <div className="editor">
      <h1>Editor</h1>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={currentColor} onChange={(e) => setCurrentColor(e.target.value)} />
      <button onClick={handleSaveColor}>Save Color</button>
    </div>
  );
}
