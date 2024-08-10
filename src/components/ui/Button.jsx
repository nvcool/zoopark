import React from "react";

export const Button = ({ children, className }) => {
  return <button className={`button ${className || ""}`}>{children}</button>;
};
