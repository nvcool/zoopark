export const Link = ({ children, href, className }) => {
  return (
    <a className={`link ${className || ""}`} href={href}>
      {children}
    </a>
  );
};
