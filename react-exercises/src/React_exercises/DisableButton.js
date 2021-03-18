import React, { useState } from "react";

export default function DisableButton() {
  let [match, setMatch] = useState("");
  let [matchc, setMatchc] = useState("");
  let [message, setMessage] = useState("");
  function changeHandler(event) {
    let input = event.target.value;
    setMatch(input);
  }
  function changeHandler1(event) {
    let input1 = event.target.value;
    setMatchc(input1);
    if (input1 === match) {
      setMessage("Password matched");
    } else {
      setMessage("Password didn't match");
    }
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Disable Button</h2>
      <label>
        Password: <input type="password" onChange={changeHandler} />
      </label>
      <br />
      <br />
      <label>
        Confirm Password: <input type="password" onChange={changeHandler1} />
      </label>
      <br />
      <br />
      <button
        type="submit"
        disabled={!match || match !== matchc}
        onClick={() => console.log(match)}
      >
        Button
      </button>
      <br />
      <br />
      <div>{message}</div>
    </div>
  );
}
