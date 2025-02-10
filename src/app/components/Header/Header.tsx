import React from "react";
import { AiOutlineGithub, AiOutlineMoon } from "react-icons/ai";
import Link from "next/link";

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
        <div className="header__logo ">
          <Link className="flex gap-2 items-center" href="/">
            <p className="text-2xl">⚛️</p>
            <span className="font-semibold text-gray-7">Andres Castro</span>
          </Link>
        </div>
        <div className="header__options flex items-center gap-6">
          <nav className="header__nav">
            <ul className="flex gap-1">
              {links.map((link) => (
                <Link href={link.url} key={link.name}>
                  <p className="text-gray-7 px-3 py-2 rounded-lg hover:bg-gray-1 transition-all duration-200">
                    {link.name}
                  </p>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="header__extra-options">
            <ul className="flex gap-2">
              <li className="hover:bg-gray-1 transition-all duration-200 flex items-center justify-center w-9 h-9 rounded-md">
                <button>
                  {/* <AiOutlineSun className="text-primary" size={24} /> */}
                  <AiOutlineMoon className="text-purple" size={24} />
                </button>
              </li>
              <li className="hover:bg-gray-1 transition-all duration-200 flex items-center justify-center w-9 h-9 rounded-md">
                <Link href="https://github.com/Andreseag" target="_blank">
                  <AiOutlineGithub
                    className="text-color-text-muted"
                    size={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
