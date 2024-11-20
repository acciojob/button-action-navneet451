import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [isVisible,setIsVisible]=useState(false);

  const handleButtonClick = () => {
    setIsVisible(true);
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick="{handleButtonClick}">Click Me</button>
    <P id="para className={isVisible ? "show" : "hide"}">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy".</P>
    
    </div>
  );
}

export default App
