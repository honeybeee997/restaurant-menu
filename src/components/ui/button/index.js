import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-color2 py-4 px-8 rounded-full mx-auto mt-10 ${classes.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
