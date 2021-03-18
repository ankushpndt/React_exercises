import React, { useState } from "react";
import "./styleComponent.css";
export default function LikeButton() {
  const list = [
    { name: "item 1", id: 1, done: false },
    { name: "item 2", id: 2, done: false }
  ];
  const [like, setLike] = useState(list);
  function likeHandler(i) {
    const doneL = [...like];

    doneL[i].done = !doneL[i].done;
    setLike(doneL);
  }
  return (
    <div className="like">
      <h1>Like Button</h1>
      {like.map((item, i) => {
        return (
          <ul>
            <li
              style={{
                listStyle: "none"
              }}
              key={Math.random()}
            >
              <h2>{item.name}</h2>

              <button onClick={() => likeHandler(i)}>
                {item.done ? "❤️️" : "🤍"}
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
