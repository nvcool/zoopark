import React from "react";
import { NavLink } from "react-router-dom";

export const Link = ({ to, children }) => {
  return (
    <NavLink className={"button"} to={to}>
      {children}
    </NavLink>
  );
};
