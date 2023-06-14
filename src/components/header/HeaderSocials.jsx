import React from "react";
import "./headersocials.css";
import { SiCodeforces } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";
import { IconContext } from "react-icons";

const HeaderSocials = () => {
  return (
    <div className="header-socials-cls">
      <IconContext.Provider value={{ size: "1.8em" }}>
        <a
          href="https://codeforces.com/profile/vidwansAD"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodeforces />
        </a>

        <a
          href="https://www.codechef.com/users/nnervvecc"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodechef />
        </a>

        <a
          href="https://www.linkedin.com/in/vidwansad"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>

        <a href="https://github.com/vidwansad" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default HeaderSocials;
