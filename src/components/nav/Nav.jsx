import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineCode, AiOutlinePhone } from "react-icons/ai";
import { SiAboutdotme, SiReact } from "react-icons/si";
import { BsTrophy } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? "active" : ""}
        onClick={() => setActiveNav("about")}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#skills"
        className={activeNav === "skills" ? "active" : ""}
        onClick={() => setActiveNav("skills")}
      >
        <AiOutlineCode />
      </a>
      <a
        href="#achievements"
        className={activeNav === "achievements" ? "active" : ""}
        onClick={() => setActiveNav("achievements")}
      >
        <BsTrophy />
      </a>
      <a
        href="#projects"
        className={activeNav === "projects" ? "active" : ""}
        onClick={() => setActiveNav("projects")}
      >
        <SiReact />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => setActiveNav("contact")}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;
