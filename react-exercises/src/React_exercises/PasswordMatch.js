import React, { useState } from "react";

export default function PasswordMatch() {
  let [match, setMatch] = useState("");
  let [message, setMessage] = useState("");

  function passwordHandler(event) {
    let input = event.target.value;
    setMatch(input);
  }
  function cpasswordHandler(event) {
    if (event.target.value === match) {
      setMessage("Password matched");
    } else if (event.target.value !== match) {
      setMessage("Password did not match");
    }
  }
  // console.log(match)
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Password Match</h1>
      <div>
        Password: <input type="password" onChange={passwordHandler} />
      </div>
      <br />
      <div>
        Confirm password: <input type="password" onChange={cpasswordHandler} />
      </div>
      <br />
      <div>{message}</div>
    </div>
  );
}
