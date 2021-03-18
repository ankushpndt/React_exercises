import React, { useState } from "react";

import "./styleComponent.css";
const classNames = require("classnames");
export default function MiniFigma() {
  const [size, setSize] = useState(16);
  const [black, setBlack] = useState(false);
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [font, setFont] = useState("Times New Roman");
  let counter1;

  function Inc(val) {
    counter1 = size + 8;
    setSize(counter1);
  }
  function Dec() {
    if (size > 8) {
      counter1 = size - 8;
      setSize(counter1);
    }
  }
  function colorHandler() {
    setBlack((color) => !color);
  }
  function colorHandler1() {
    setRed((red) => !red);
  }
  function colorHandler2() {
    setYellow((yellow) => !yellow);
  }
  function fontHandler(event) {
    let input = event.target.value;
    setFont(input);
  }

  return (
    <div
      style={{ margin: "2rem" }}
      className={classNames({ Red: red, Yellow: yellow, Black: black })}
    >
      <h1>Figma App</h1>
      <br />
      <div>
        <select onChange={fontHandler}>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Arial">Arial</option>
          <option value="Lucida Console">Lucida Console</option>
        </select>
      </div>
      <br />
      <br />
      <button
        style={{
          borderRadius: "0.5rem",
          padding: "0.5rem 0.5rem",
          fontSize: "1.5rem"
        }}
        onClick={Inc}
      >
        +
      </button>
      <span style={{ padding: "1rem" }}>{size}px</span>
      <button
        style={{
          borderRadius: "0.5rem",
          padding: "0.5rem 0.5rem",
          fontSize: "1.5rem"
        }}
        disabled={size === 8}
        onClick={Dec}
      >
        -
      </button>
      <br />
      <br />
      <h1 style={{ fontSize: `${size}px`, fontFamily: `${font}` }}>
        Heading 1
      </h1>
      <br />
      <p style={{ fontSize: `${size}px`, fontFamily: `${font}` }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <br />
      <button
        style={{
          borderRadius: "0.5rem",
          padding: "0.5rem",
          backgroundColor: "Black",
          color: "white",
          letterSpacing: "1px",
          margin: "1rem",
          outline: "none"
        }}
        onClick={colorHandler}
      >
        <strong>Black</strong>
      </button>
      <button
        style={{
          borderRadius: "0.5rem",
          padding: "0.5rem",
          backgroundColor: "Red",
          letterSpacing: "1px",
          margin: "1rem",
          outline: "none"
        }}
        onClick={colorHandler1}
      >
        <strong>Red</strong>
      </button>

      <button
        style={{
          borderRadius: "0.5rem",
          padding: "0.5rem",
          backgroundColor: "Yellow",
          letterSpacing: "1px",
          margin: "1rem",
          outline: "none"
        }}
        onClick={colorHandler2}
      >
        <strong>Yellow</strong>
      </button>
    </div>
  );
}
