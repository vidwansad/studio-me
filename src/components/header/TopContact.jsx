import React from "react";
import "./topcontact.css";
import CV from "../../assets/cv-plcholder.pdf";

const TopContact = () => {
  return (
    <div className="tc-buttons">
      <a href={CV} download className="btn">
        CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default TopContact;
