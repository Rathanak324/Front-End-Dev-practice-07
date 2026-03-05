import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState();

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if(isRaining == false){
      return("SUN TIME!");
    }else if(isRaining == true){
      return("RAIN TIME!");
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if(isRaining == false){
      return("sunny");
    }else if(isRaining == true){
      return("rainy");
    }

  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
