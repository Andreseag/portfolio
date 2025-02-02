import React from "react";

const links = [
  {
    name: "Sobre mí",
    url: "#",
  },
  {
    name: "Artículos",
    url: "#",
  },
  {
    name: "Proyectos",
    url: "#",
  },
  {
    name: "Contacto",
    url: "#",
  },
];

const Header = () => {
  return (
    <header className="header sticky bg-white/30 backdrop-blur-sm h-[60px]  top-0 left-0 w-full">
      <div className="header__container border-b border-color-border h-full flex items-center justify-between px-4">
        <div className="header__logo">
          <h1 className="text-xl font-bold">Andres Castro</h1>
        </div>
        <nav className="header__nav">
          <ul className="flex gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href="#"
                  className="text-gray-10 px-3 py-2 rounded-lg hover:bg-gray-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
