import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Inputform() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  const deleteall = () => {
    setTodos([]);
  };

  return (
    <div id="allbody">
      <div id="mainbox">
        <h1 id="topic">REMINDER APP</h1>

        <div id="middle">
          <span></span>
          <input
            id="inputfield"
            placeholder="Add your new todo"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div id="buttonbutton">
            <button data-inline="true" id="addbutton" onClick={addTodo}>
              &#43;
            </button>
          </div>
        </div>

        <ul id="listed">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              {/* <button
                className="removebutton"
                onClick={() => removeTodo(index)}
              >
                &#x1F5D1;
              </button> */}
              <DeleteIcon
                className="removebutton"
                onClick={() => removeTodo(index)}
              />
            </li>
          ))}
        </ul>

        <div id="deletebox">
          <span>You have {todos.length} pending tasks</span>
          <button id="deleteall" onClick={deleteall}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputform;
