import React, { useState } from "react";
export default function SimpleCounter() {
  var [counter, setCounter] = useState(0);
  var [view, setView] = useState(true);
  let counter1;
  function Inc() {
    counter1 = counter + 1;
    setCounter(counter1);
    if (counter1 > 0) {
      setView(false);
    }
  }
  function Dec() {
    counter1 = counter - 1;
    if (counter1 <= 0) {
      setView(true);
    }
    setCounter(counter1);
  }
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1>Simple Counter</h1>
      <br />
      <button onClick={Inc} style={{ fontSize: "2rem" }}>
        +
      </button>
      <span style={{ padding: "1rem", fontSize: "2rem" }}>{counter}</span>
      <button disabled={view} onClick={Dec} style={{ fontSize: "2rem" }}>
        -
      </button>
    </div>
  );
}
