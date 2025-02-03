import React from "react";

const skillsData = [
  "Typescript",
  "Javascript",
  "ReactJS",
  "VueJS",
  "Nuxt",
  "Nextjs",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Figma",
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
          {skillsData.map((skill) => (
            <div
              key={skill}
              className="skills__item bg-gray-1 p-3 rounded-lg mb-3"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
