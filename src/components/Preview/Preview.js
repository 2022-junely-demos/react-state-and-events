import React from 'react';
import './Preview.css';
export default function Preview({ title, colors }) {
  return (
    <div className="preview">
      <h1>{title}</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
