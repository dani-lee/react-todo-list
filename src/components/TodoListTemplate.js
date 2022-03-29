import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = (props) => {
  return <main className="todo-list-template">{props.children}</main>;
};

export default TodoListTemplate;
