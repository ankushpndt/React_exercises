import React, { useState } from "react";

export default function AlphanumericPassword() {
  const [check, setCheck] = useState("");
  function checkHandler(event) {
    let input = event.target.value;
    let number = /[0-9]/;
    let character = /[a-zA-Z]/;
    let num = number.test(input);
    let char = character.test(input);
    setCheck(input);
    if (input.length > 0) {
      if (num && char) {
        setCheck("true");
      } else {
        setCheck("false");
      }
    } else {
      setCheck("");
    }
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Alphanumeric Password</h2>
      <label>
        Password: <input type="password" onChange={checkHandler} />
      </label>
      <br />
      <br />
      <div>
        {check === "true"
          ? "Valid Password"
          : check === "false"
          ? "Password must contain a letter and a number"
          : ""}
      </div>
    </div>
  );
}
