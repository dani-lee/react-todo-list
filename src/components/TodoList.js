import React from "react";

import "./TodoList.css";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo.todo} done={todo.done} />
      ))}
    </ul>
  );
};

export default TodoList;
