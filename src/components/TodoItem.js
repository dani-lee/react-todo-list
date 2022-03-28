import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [removeBtn, setRemoveBtn] = useState(false);
  const [done, setDone] = useState(false);

  const checkBoxHandler = () => {
    if (!done) {
      setDone(true);
    } else {
      setDone(false);
    }
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
      <span className={done ? "done-text" : ""}>study React</span>
      {removeBtn && (
        <div className="remove">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
