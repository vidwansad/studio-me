import "./index.css";
import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Achievements from "./components/achievements/Achievements";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import HeaderSocials from "./components/header/HeaderSocials";
import AVLogo from "../src/assets/logo.png";
import { motion } from "framer-motion";
import { RevealY } from "./components/Reveal/RevealY";
import { RevealNY } from "./components/Reveal/RevealNY";
import { RevealX } from "./components/Reveal/RevealX";
import { RevealNX } from "./components/Reveal/RevealNX";

const App = () => {
  return (
    <div className="app-top">
      <img src={AVLogo} className="av__logo" alt="my-logo"></img>
      <HeaderSocials />
      <Nav />
      <RevealNX>
        <Header />
      </RevealNX>
      <RevealX>
        <About />
      </RevealX>
      <RevealNX>
        <Skills />
      </RevealNX>
      <RevealX>
        <Achievements />
      </RevealX>
      <RevealNX>
        <Contact />
      </RevealNX>
    </div>
  );
};

export default App;
