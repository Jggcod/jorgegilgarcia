export default function IconRedirect({ href, target = "_blank", rel = "noopener noreferrer", children }) {
  return (
    <a
      className="rounded-full flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-800 bg-primary-950 dark:ring-white/30 ring-primary/20 dark:bg-red-100/10 hover:ring-primary/5 dark:hover:ring-white/20 duration-300 transition-all h-12 w-12"
      href={href}
      target={target}
      rel={rel}>
      {children}
    </a>
  );
}
