// Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomeArticles from "./components/HomeArticles/HomeArticles";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeArticles />
      <Skills />
      <Projects />
    </>
  );
}
