import React from "react";

export const Para = ({ value,value1, className,onclick,Para }) => {
  return (
    <p onClick={onclick} className={className}>
      {value1}
      {value}
      {Para}
    </p>
  );
};
