import React, { useState } from "react";
import db from "../../src/FirebaseConfig";
import "./Form.css";

const Form = (props) => {
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      done: false,
    });
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <form className="form">
      <input
        autoFocus
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write that you have to do"
      />
      <button type="button" className="addBtn" onClick={addTodoHandler}>
        add
      </button>
    </form>
  );
};

export default Form;
