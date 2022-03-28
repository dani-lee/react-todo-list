import React, { useState } from "react";

import "./PlusButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const PlusButton = () => {
  const [rotateBtn, setRotateBtn] = useState(false);

  const plusBtnHandler = () => {
    if (!rotateBtn) {
      setRotateBtn(true);
    } else {
      setRotateBtn(false);
    }
  };
  return (
    <div
      className={`plusBtn ${rotateBtn ? "cancel" : ""}`}
      onClick={plusBtnHandler}
    >
      <FontAwesomeIcon icon={faCirclePlus} />
    </div>
  );
};

export default PlusButton;
