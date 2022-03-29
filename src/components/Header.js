import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="title">
      <p>{props.onDate}</p>
      <div className="day">{props.onDay}</div>
      <div className="tasks-left">[2] &nbsp;tasks left</div>
    </div>
  );
};

export default Header;
