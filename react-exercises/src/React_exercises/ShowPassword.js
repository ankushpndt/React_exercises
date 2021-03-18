import React, { useState } from "react";

export default function ShowPassword() {
  const [passwordShow, setPasswordShow] = useState(false);
  function toggleHandler() {
    setPasswordShow((passwordShow) => !passwordShow);
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Show Password</h2>
      Password: <input type={passwordShow ? "text" : "password"} />
      <span>
        <i
          style={{ padding: "1rem" }}
          className="far fa-eye"
          id="togglePassword"
          onClick={toggleHandler}
        ></i>
      </span>
    </div>
  );
}
