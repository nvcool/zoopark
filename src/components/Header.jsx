import logo from "@assets/logo.svg";
import { CustomNavLink } from "./ui/CustomNavLink";
import menu from "@assets/menu.svg";
import { NavLink } from "react-router-dom";

const links = [
  { label: "О нас", to: "/about-us" },
  { label: "проекты и события", to: "/projects" },
  { label: "новости", to: "/hab" },
  { label: "партнеры", to: "/gov" },
  { label: "зоопарк", to: "/no" },
];
export function Header() {
  return (
    <header className="container navigation">
      <nav className="navigation__container">
        <div className="navigation__logo">
          <NavLink to="/" className="navigation__logo-link">
            <img src={logo} alt="logo" />
          </NavLink>
          <span className="navigation__logo-description">
            "Лампушка"- Заповедный мир"
          </span>
        </div>
        <ul className="navigation__link-list">
          {links.map((link) => {
            return (
              <li key={link.label} className="navigation__link">
                <CustomNavLink to={link.to}>{link.label}</CustomNavLink>
              </li>
            );
          })}
        </ul>
        <div className="navigation__menu">
          <img src={menu} alt="" />
        </div>
      </nav>
    </header>
  );
}
