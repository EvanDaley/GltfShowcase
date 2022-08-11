import './App.css';
import mouseState from './mouseState';
import React, { useEffect } from 'react';

function App() {
  const onDocumentPointerMove = (e) => {
    // console.log(e.clientX)
    mouseState.x = e.clientX
    mouseState.y = e.clientY
  }

  useEffect(() => {
    document.addEventListener('mousemove', onDocumentPointerMove, false);
  }, []);

  return (
    <>
      <div className="html-content-container">
        <p>test</p>
      </div>
    </>
  );
}

export default App;
