const developerSkills = [
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    image:
      "https://images.seeklogo.com/logo-png/32/1/next-js-logo-png_seeklogo-321806.png",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Git",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
  },
  {
    name: "Docker",
    image:
      "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    name: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },

  {
    name: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "Nuxt",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Sass",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
];

const Skills = () => {
  return (
    <div className="skills pb-9 mb-9">
      <div className="skills__container">
        <div className="skills__title mb-6">
          <h2>Skills</h2>
          <p>Tecnologías y herramientas que manejo en mi día a día</p>
        </div>
        <div className="skills__items grid grid-cols-6 gap-3">
          {developerSkills.map((skill) => (
            <div
              key={skill.name}
              className="skills__item bg-gray-1 p-3 h-28 rounded-lg mb-3 flex items-center justify-center"
            >
              <img src={skill.image} alt={skill.name} width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
