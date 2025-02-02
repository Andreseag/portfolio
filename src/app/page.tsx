export default function Home() {
  const links = [
    {
      name: "Sobre mí",
      url: "#",
    },
    {
      name: "Portafolio",
      url: "#",
    },
    {
      name: "Contacto",
      url: "#",
    },
  ];

  return (
    <>
      <header className="header h-20 top-0 left-0 w-full">
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.name} className="text-[#8B8B8D] text-xl">
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
