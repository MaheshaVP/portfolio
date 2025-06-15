import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/header.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2 className="welcome_text">Welcome to my Portfolio</h2>
        <h5>Hello I'm</h5>
        <h1>Mahesh</h1>
        <h5 className="text-light">Web & Python Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My img" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
