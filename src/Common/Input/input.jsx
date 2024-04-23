import React from "react";

export const Input = ({
  type,
  className,
  onChange,
  placeholder,
  nam,
  value,
  required,
  maxLength,
  readOnly,
  checked
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      name={nam}
      className={className}
      placeholder={placeholder}
      value={value}
      required={required}
      maxLength={maxLength}
      readOnly={readOnly}
      checked={checked}
    />
  );
};