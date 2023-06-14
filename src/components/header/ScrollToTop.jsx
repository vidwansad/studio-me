import React from "react";
import "./header.css";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const ScrollToTop = () => {
  return (
    <div className="to-pg-top">
      <a href="#">
        <IconContext.Provider value={{ size: "3rem", style: {} }}>
          <FaLongArrowAltUp />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default ScrollToTop;
