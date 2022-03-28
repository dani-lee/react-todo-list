import React from "react";
import "./TodoListTemplate.css";

import Form from "./Form";
import TodoList from "./TodoList";

const TodoListTemplate = (props) => {
  return <main className="todo-list-template">{props.children}</main>;
};

export default TodoListTemplate;
