import { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bionrgglogo from "./assets/img/bionrgg.png";
import movieslogo from "./assets/img/movies.png";
import sounderLogo from "./assets/img/workSounder.png";

import telegramImg from "./assets/img/telegram.png";
import fhuntImg from "./assets/img/fhunt.png";
import githubImg from "./assets/img/github.png"

const App = () => {
  const [data, setData] = useState({
    skills: ["HTML5, CSS3, SCSS", "JavaScript (ES6+), TypeScript", "Redux, Redux Toolkit", "PHP, MySQL", "jQuery", "REST API", "Flexbox, CSS Grid", "Tailwind CSS / Material UI", "Figma (Basic), Chrome DevTools", "React.js, React Hooks, React Router", "Node.js Express", "WordPress (Custom Themes, Plugins, ACF)", "Git, GitHub", "Responsive & Adaptive Layout", "NPM, Webpack, Vite", "Axios, classnames, React Icons"],
    languages: ["🇺🇦 Ukrainian — Native / Fluent", "🇷🇺 Russian — Fluent", "🇬🇧 English — Pre-Intermediate"],
    projects: [
      {
        title: "Bionrgg",
        stack: "Tech stack: React.js, PHP",
        descr: "A website for creating and customizing profiles. ",
        fullDescr: "I created a website where you can create an online business card, with all your social networks and a unique design. ",
        logo: bionrgglogo,
      },
      {
        title: "GetMovie",
        stack: "Tech stack: React.js, REST API",
        descr: "A website that uses api to get movie data. ",
        fullDescr: "I created a website for viewing movie data, where the data was taken through the API. ",
        logo: movieslogo,
      },
      {
        title: "WorkSounder",
        stack: "Tech stack: React.js",
        descr: "A website where you can listen to the sounds of nature. ",
        fullDescr: "I created a website about listening to nature sounds to help me focus while working. ",
        logo: sounderLogo,
      }
    ],
    contacts: [
      {
        logo: telegramImg,
        link: "https://t.me/chupserso"
      },
      {
        logo: fhuntImg,
        link: "https://freelancehunt.com/freelancer/bosjeny.html"
      },
      {
        logo: githubImg,
        link: "https://github.com/Chupserso"
      },
    ],
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <About />
      <Skills skills={data.skills} title={"Skills"} />
      <Skills skills={data.languages} title={"Languages"} />
      <Projects data={data} projects={data.projects} />
      <Contacts contacts={data.contacts} />
    </div>
  );
};

export default App;