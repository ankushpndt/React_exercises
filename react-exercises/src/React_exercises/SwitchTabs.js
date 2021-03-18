import React, { useState } from "react";
const arr = {
  Home: [{ info: "This is home" }],
  About: [{ info: "This is about" }],
  Profile: [{ info: "This is profile" }]
};
export default function SwitchTabs() {
  const [tab, setTab] = useState("Home");
  function clickHandler(item) {
    setTab(item);
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Switch Tabs</h2>
      <div>
        {Object.keys(arr).map((item, i) => {
          return (
            <button key={i} onClick={() => clickHandler(item)}>
              {item}
            </button>
          );
        })}
        <ul>
          {arr[tab].map((selectedItem, i) => {
            return (
              <li style={{ listStyle: "none" }} key={i}>
                <div
                  style={{
                    textAlign: "left",
                    padding: "1rem",
                    border: "1px solid black"
                  }}
                >
                  {selectedItem.info}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
