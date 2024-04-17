export default function IconRedirect({ href, target = "_blank", children }) {
  return (
    <a
      href={href}
      target={target}>
      {children}
    </a>
  );
}
