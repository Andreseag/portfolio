import { format } from "@formkit/tempo";

// create article to software development
const articleData = [
  {
    title: "Introducción a las características de JavaScript ES6",
    date: "2023-10-01",
  },
  {
    title: "Entendiendo los React Hooks",
    date: "2023-09-25",
  },
  {
    title: "Mejores prácticas para el desarrollo con Node.js",
    date: "2023-09-18",
  },
  {
    title: "Guía para principiantes de Docker",
    date: "2023-09-10",
  },
  {
    title: "Dominando CSS Grid Layout",
    date: "2023-09-05",
  },
];

const HomeArticles = () => {
  return (
    <div className="articles pb-9 mb-9">
      <div className="articles__container">
        <div className="articles__title mb-6">
          <h2>Artículos</h2>
          <p>
            Guias y tutoriales sobre desarrollo de software, diseño de
            interfaces
          </p>
        </div>

        <div className="articles__list">
          {articleData.map((article) => (
            <a
              href="#"
              key={article.title}
              className="articles__item block cursor-pointer group mb-3 py-1 duration-200"
            >
              <h3 className="articles__item-title group-hover:underline mb-1 text-gray-8">
                {article.title}
              </h3>
              <p className="articles__item-date text-sm italic text-gray-7">
                {format(article.date, "medium")}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeArticles;
