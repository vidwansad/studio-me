import React from "react";
import "./skills.css";
import CPPLogo from "../../assets/logosvgs/Others/C++-01.png";
import NodeJSLogo from "../../assets/logosvgs/Others/Nodejs-02.png";
import JavaLogo from "../../assets/logosvgs/Others/Java-01.png";
import CSSLogo from "../../assets/logosvgs/Others/CSS-3-01.png";
import HTMLLogo from "../../assets/logosvgs/Others/HTML-5-logo-vector-01.png";
import JSLogo from "../../assets/logosvgs/Others/JavaScript-01.png";
import PythonLogo from "../../assets/logosvgs/Others/Python-04.png";
import ReactLogo from "../../assets/logosvgs/Others/React-01.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container tech__container">
        <h1 className="text-light">&lt;skills&gt;</h1>
        <img src={JSLogo} className="js" alt="JS"></img>
        <img src={HTMLLogo} className="ht" alt="HTML"></img>
        <img src={NodeJSLogo} className="nj" alt="Node"></img>
        <img src={CSSLogo} className="cs" alt="CSS"></img>
        <img src={ReactLogo} className="rc" alt="React"></img>
        <img src={CPPLogo} className="cp" alt="C++"></img>
        <img src={JavaLogo} className="jv" alt="Java"></img>
        <img src={PythonLogo} className="py" alt="Python"></img>
      </div>
    </section>
  );
};

export default Skills;
