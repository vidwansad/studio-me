import "./index.css";
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Achievements from "./components/achievements/Achievements";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contact/Contact";

const App = () => {
  return (
    <div className="app-top">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
