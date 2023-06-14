import React from "react";
import "./header.css";
import TopContact from "./TopContact";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { Typewriter } from "react-simple-typewriter";
import ScrollToTop from "./ScrollToTop";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3 className="text-light">Meet</h3>
        <h1>Ajinkya Vidwans</h1>

        <div className="h1 text-light typewriting">
          <Typewriter
            words={["Competitive Programming", "Frontend Developement"]}
            typeSpeed={30}
            deleteSpeed={20}
            loop={1000}
            delaySpeed={1500}
            cursor
            cursorStyle="_"
          />
        </div>

        <HeaderSocials />

        <img src={ME} alt="myimg" className="img me-img"></img>

        <TopContact />
      </div>
    </header>
  );
};

export default Header;
