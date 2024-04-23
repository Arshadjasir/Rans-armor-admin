import React from "react";

export const Button = ({ letter, letter2, className, onclick ,icon,value,disabled}) => {
  return (
    <button onClick={onclick} className={className} disabled={disabled}>
      {letter2}
      {letter}
      {icon}
      {value}
    </button>
  );
};