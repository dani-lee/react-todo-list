import React, { useState } from "react";
import db from "../../src/FirebaseConfig";
import "./TodoItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const TodoItem = (props) => {
  const [removeBtn, setRemoveBtn] = useState(false);
  const [done, setDone] = useState(props.done);

  const checkBoxHandler = () => {
    if (!done) {
      db.collection("todos").doc(props.id).update({ done: true });
      setDone(true);
    } else {
      db.collection("todos").doc(props.id).update({ done: false });
      setDone(false);
    }
  };

  const deleteTodoHandler = () => {
    db.collection("todos").doc(props.id).delete();
  };
  return (
    <li
      onMouseOver={() => {
        setRemoveBtn(true);
      }}
      onMouseLeave={() => {
        setRemoveBtn(false);
      }}
    >
      <div className="checkBox" onClick={checkBoxHandler}>
        {!done && <FontAwesomeIcon icon={faCircle} />}
        {done && (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={done ? "done" : ""}
          />
        )}
      </div>
      <span className={done ? "done-text" : ""}>{props.todo}</span>
      {removeBtn && (
        <div className="remove" onClick={deleteTodoHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
