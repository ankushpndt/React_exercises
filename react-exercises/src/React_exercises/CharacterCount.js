import React, { useState } from "react";
export default function CharacterCount() {
  let [input, setInput] = useState("");
  var max = 280;

  function inputHandler(event) {
    let userInput = event.target.value;

    setInput(userInput);
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Character Count</h1>
      <textarea
        type="number"
        maxLength="280"
        placeholder="Enter the text"
        onChange={inputHandler}
        style={{ width: "600px", height: "10rem" }}
      ></textarea>
      <div>
        <span>Count: {input.length} </span>
        <span>/ {max}</span>
      </div>
      <div>Character remaining: {max - input.length}</div>
    </div>
  );
}
