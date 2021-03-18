import { useState } from "react";
export default function Todo() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    setTodoList([
      ...todoList,
      { id: Math.random(), itemName: input, done: false }
    ]);
    setInput("");
  }
  function changeHandler(event) {
    let userInput = event.target.value;
    setInput(userInput);
  }
  const todoDone = (i) => {
    const doneList = [...todoList];
    doneList[i].done = !doneList[i].done;
    setTodoList(doneList);
  };
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={submitHandler}>
        <label>
          Todo: <input type="text" value={input} onChange={changeHandler} />
        </label>
        <button type="submit">Add</button>
        <br />
        <br />
        {todoList.map((todo, i) => {
          return (
            <p
              onClick={() => todoDone(i)}
              style={{
                textDecoration: todo.done ? "line-through" : "none"
              }}
              key={i}
            >
              {todo.itemName}
            </p>
          );
        })}
      </form>
    </div>
  );
}
