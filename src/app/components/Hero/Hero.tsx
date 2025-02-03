import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero mb-12">
      <div className="hero__container flex items-center gap-20">
        <div className="hero__info flex flex-col items-start justify-center h-full w-full">
          <h1 className="flex items-end font-bold">
            !Hola, Soy Andres Castro!
          </h1>
          <p className="text-2xl mt-1 mb-6 font-medium">Software Developer</p>
          <p className="text-lg leading-[1.7] mb-5">
            Soy un Frontend Developer con más de 5 años de experiencia
            trabajando con tecnologías cómo ReactJS, VueJS, Nuxt, Nextjs,
            Javascript, Typescript, HTML5, CSS3, SASS, Tailwind, Bootstrap,
            también cuento con experiencia y conocimientos en el área de UI/UX
            Design usando Figma.
          </p>
          <p className="text-lg leading-[1.7] mb-5">
            Me encanta el mundo del desarrollo y los retos que este tiene al ser
            cambiante y estar en constante crecimiento, por lo que siempre estoy
            investigando y aprendiendo sobre nuevas tendencias, lenguajes y
            herramientas para estar actualizado.
          </p>
        </div>
        <div className="hero__photo">
          <Image
            src="/img/avatar.jpg"
            alt="Andres Castro"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
