import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [isTyping, setIsTyping] = useState("");
  

  function handleKeyPress (event){
    event.preventDefault();
    const value = event.target.value;

    setIsTyping(value);
  }

  /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label >Enter any text !</label>
      <input onChange={handleKeyPress}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled value={toUpperCase(isTyping)}/>
      </p>
    </main>
  );

  function toUpperCase(text) {
    return text.toUpperCase();
  }
}

export default App;
