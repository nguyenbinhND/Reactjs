import React from "react";
// import "./Button.scss";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={
        `${style.button}  ${props.secondary ? style.buttonSecondary : ""}`
        // `button ${props.className || ""}`
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
