import React, { useState, useEffect } from "react";
import db from "./FirebaseConfig";

import "./App.css";
import TodoListTemplate from "./components/TodoListTemplate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import PlusButton from "./components/PlusButton";

function App() {
  const today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: today.getDay(),
  };

  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dayString = WEEKDAY[time.day];
  let timestring = `${time.month}.${time.date}.${time.year}`;

  const [isRotated, setIsRotated] = useState(false);

  const plusBtnHandler = () => {
    if (!isRotated) {
      setIsRotated(true);
    } else {
      setIsRotated(false);
    }
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((data) => {
      setTodos(
        data.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          done: doc.data().done,
        }))
      );
    });
  }, [input]);

  const addTodoHandler = () => {
    setInput("");
  };

  return (
    <div>
      <TodoListTemplate>
        <Header onDate={timestring} onDay={dayString} />
        <TodoList todos={todos} />
        {isRotated && <Form addTodo={addTodoHandler} input={input} />}
      </TodoListTemplate>
      <PlusButton openForm={isRotated} onClick={plusBtnHandler} />
    </div>
  );
}

export default App;
