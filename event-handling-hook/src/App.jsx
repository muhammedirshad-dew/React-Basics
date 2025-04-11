import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [x, setx] = useState(0);

  const btnClick = () => {
    console.log("Clicked");
    setx(x + 1);
    console.log(x);
  };
  return (
    <div>
      <h1>Event handking using useState hook</h1>
      {x} <br />
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click mee
      </button>
    </div>
  );
};

export default App;
