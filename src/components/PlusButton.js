import React from "react";

import "./PlusButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const PlusButton = (props) => {
  return (
    <div
      className={`plusBtn ${props.openForm ? "cancel" : ""}`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faCirclePlus} />
    </div>
  );
};

export default PlusButton;
