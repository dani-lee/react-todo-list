import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form className="form">
      <input type="text" name="todo" placeholder="Write that you have to do" />
      <button type="button" className="addBtn">
        add
      </button>
    </form>
  );
};

export default Form;
