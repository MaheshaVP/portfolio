import React from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImage} alt="Header img" />
        </div>
        <h3>Mahesha V P</h3>
        <p>
          Frontend & Python Developer | Passionate Problem Solver | Tech
          Enthusiast 💬 "I build responsive and user-friendly web applications
          using modern technologies. With a strong foundation in both design and
          logic, I aim to create impactful digital experiences and continuously
          grow as a developer."
        </p>
        <div className="header_cta">
          <a href="#contact" className="btn primary">Let's talk</a>
          <a href="#portfolio" className="btn light">My work</a>
        </div>
        <div className="header_socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
