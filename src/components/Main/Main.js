import React from 'react';
import { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Main.css';

export default function Main() {
  const [title, setTitle] = useState('default state');
  const [colors, setColors] = useState(['red', 'white', 'blue']);
  return (
    <div className="main">
      <Preview title={title} colors={colors} />
      <Editor title={title} setTitle={setTitle} setColors={setColors} />
    </div>
  );
}
