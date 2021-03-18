import React, { useState } from "react";

export default function ToastButton() {
  const [show, setShow] = useState("");
  const [hide, setHide] = useState("none");
  function clickHandler() {
    setHide("inline");
    setShow("inline");
  }
  function clickHandler1() {
    setHide("none");
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Toast Button</h1>
      <button
        style={{ backgroundColor: "white", cursor: "pointer" }}
        onClick={clickHandler}
      >
        Toast Button
      </button>
      <br />
      <br />
      <span style={{ display: `${show}` }}>
        <span style={{ display: `${hide}` }}>
          <span>Some Text</span>{" "}
          <button
            style={{
              backgroundColor: "white",
              cursor: "pointer"
            }}
            onClick={clickHandler1}
          >
            Hide
          </button>
        </span>
      </span>
    </div>
  );
}
