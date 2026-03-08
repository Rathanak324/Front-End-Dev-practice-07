import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */

  const [a, setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    event.preventDefault();
    
    const value = event.target.value;
    setA(value);

  }

  function onB(event) {
    event.preventDefault();

    const value = event.target.value;
    setB(value);
  }

  function resultTotal(event){
    event.preventDefault();

    if(isNaN(+a) || isNaN(+b)){
      setResult("A and B Shall be number")
      return;
    }

    const value = (+a + +b);
    setResult(value);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}

      <input disabled value={result} style={{color: result === "A and B Shall be number" ? 'red' : 'white'}}/>
      
      <button onClick={resultTotal}>Compute</button>
    </main>
  );
}

export default App;
