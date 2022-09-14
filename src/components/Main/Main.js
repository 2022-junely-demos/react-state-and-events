import React from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <Preview />
      <Editor />
    </div>
  );
}
