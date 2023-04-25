import { Link } from "react-router-dom";

export default function HeaderLinks() {
  const navLinks = [
    {
      name: "Site",
      href: "/site",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  return (
    <div className="hidden md:block">
      <ul className="flex gap-x-4 divide-x">
        {navLinks.map((link) => {
          return (
            <li key={link.name} className="pl-4">
              <Link
                to={link.href}
                className="transition ease-in duration-200 hover:text-blue-900 dark:hover:text-blue-300 text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
