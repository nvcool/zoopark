export const Link = ({ children, href }) => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};
