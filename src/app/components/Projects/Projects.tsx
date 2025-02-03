const projectsData = [
  {
    name: "Quick",
    description: "Plataforma para la prestación de servicios de logistica",
    url: "https://app.quick.com.co/es/",
    image:
      "https://quick.com.co/wp-content/uploads/2024/10/LOGO-BLACK-QUICK-e1717304365618.jpeg",
    year: "2019",
  },
  {
    name: "Neivor",
    description:
      "Plataforma para la gestion y administración de conjuntos residenciales",
    url: "https://neivor.com/",
    image: "https://neivor.com/wp-content/uploads/2022/11/Group-3639.webp",
    year: "2022",
  },
  {
    name: "Tiendas 3B",
    description:
      "E-commerce para la venta de productos de consumo masivo en México",
    url: "https://tiendas3b.com/",
    image:
      "https://tiendas3b.com/wp-content/uploads/2022/11/logo-tiendas-3b.png",
    year: "2023",
  },
  {
    name: "Viva Leer Copec",
    description:
      "Plataforma para fomentar la lectura en niños y jóvenes de Chile",
    url: "https://vivaleercopec.cl/",
    image:
      "data:image/png;base64,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",
    year: "2023",
  },
  {
    name: "Chiletur Copec",
    description:
      "Plataforma para fomentar el turismo en Chile y promocionar los servicios de Copec",
    url: "https://chile.tur.com/",
    image:
      "https://chile.tur.com/_next/image?url=https%3A%2F%2Fd6myp1633h7qr.cloudfront.net%2Fshared%2Flogo-header.png&w=200&q=75",
    year: "2023",
  },
  {
    name: "Copec Pay",
    description: "Plataforma para la gestión de pagos y beneficios de Copec",
    url: "https://www.appcopec.cl/copecpay/",
    image:
      "https://www.appcopec.cl/wp-content/themes/chris/img/menu/logo_copecpay.svg",
    year: "2023",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title mb-6">
          <h2>Proyectos</h2>
          <p>Proyectos colaborativos en los que trabajado </p>
        </div>
        <div className="projects__content grid gap-4 grid-cols-1 md:grid-cols-2">
          {projectsData.map((project) => (
            <a
              href={project.url}
              key={project.name}
              className="projects__item relative block cursor-pointer group mb-3 duration-200 bg-color-background-sidebar px-4 py-8 rounded-lg"
              target="_blank"
            >
              <p className="text-sm mb-2">{project.year}</p>
              <img
                className="absolute top-5 right-4"
                src={project.image}
                alt={project.name}
                width={project.name === "Tiendas 3B" ? 50 : 80}
              />
              <h3 className="projects__item-title group-hover:underline mb-1 text-xl text-color-text-link">
                {project.name}
              </h3>
              <p className="projects__item-description text-sm italic text-gray-7">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
