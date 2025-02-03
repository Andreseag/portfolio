import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

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
    <header className="header absolute bg-white/30 backdrop-blur-md h-[60px]  top-0 left-0 w-full">
      <div className="header__container border-b border-color-border h-full flex items-center justify-between px-4">
        <div className="header__logo">
          <span className="font-bold">Andres Castro</span>
        </div>
        <div className="header__options flex items-center gap-6">
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
          <div className="header__extra-options">
            <ul>
              <li className="hover:bg-gray-1 transition-all duration-200 flex items-center justify-center w-9 h-9 rounded-md">
                <a href="">
                  <AiOutlineGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
