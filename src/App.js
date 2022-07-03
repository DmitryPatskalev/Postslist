import React from "react";
import './styles/App.css'

function App() {


  return (
    <div className="App">
      <div className='post'>
        <div className="post_content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - язык программирования.
          </div>
        </div>
        <div className="post_btns">
          <button>remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
