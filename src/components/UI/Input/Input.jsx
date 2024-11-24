import React from "react";
import s from "../Input/Input.module.scss";

const Input = ({ type, name, placeholder, styles, icon, text }) => {
  return (
    <div className={s.inputContainer}>
      {icon && <span className={s.icon}>{icon}</span>} 
      <input
        className={`${s[styles]}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
