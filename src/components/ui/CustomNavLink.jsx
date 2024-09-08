import { NavLink } from "react-router-dom";

export const CustomNavLink = ({ children, to, className }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return `link ${isActive ? "link--active" : ""} ${className || ""}`;
      }}
      to={to}>
      {children}
    </NavLink>
  );
};
