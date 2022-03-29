import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form className="form">
      <input
        autoFocus
        type="text"
        name="todo"
        placeholder="Write that you have to do"
        value={props.input}
      />
      <button type="button" className="addBtn" onClick={props.addTodoHandler}>
        add
      </button>
    </form>
  );
};

export default Form;
