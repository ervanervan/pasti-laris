import React from "react";

const Button = ({ children, onClick, variant, size }) => {
  let buttonClass = "rounded-full";

  // Set variant styles
  if (variant === "primary") {
    buttonClass += " px-8 py-5 bg-green-2 text-green-1 font-bold";
  } else if (variant === "secondary") {
    buttonClass +=
      " px-8 py-5 bg-tranparent text-green-1 border border-green-1 font-semibold";
  } else if (variant === "white") {
    buttonClass += " px-5 py-3 bg-white-1 text-green-1 font-semibold";
  } else if (variant === "white border") {
    buttonClass +=
      " px-5 py-3 bg-tranparent text-white-1 border border-white-1 font-semibold";
  }

  // Set size styles
  if (size === "sm") {
    buttonClass += " text-sm";
  } else if (size === "md") {
    buttonClass += " text-base";
  } else if (size === "lg") {
    buttonClass += " text-lg";
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
