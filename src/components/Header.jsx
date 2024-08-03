import logo from "@assets/logo.svg";
import { Link } from "./ui/Link";

const links = [
  { label: "О нас", href: "#" },
  { label: "проекты и события", href: "#" },
  { label: "новости", href: "#" },
  { label: "партнеры", href: "#" },
  { label: "зоопарк", href: "#" },
];
export function Header() {
  return (
    <header className="container navigation">
      <nav className="navigation__container">
        <div className="navigation__logo">
          <a href="#" className="navigation__logo-link">
            <img src={logo} alt="logo" />
          </a>
          <span className="navigation__logo-description">
            "Лампушка"- Заповедный мир"
          </span>
        </div>
        <ul className="navigation__link-list">
          {links.map((link) => {
            return (
              <li key={link.label} className="navigation__link">
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
