import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer_logo">
        Portfolio
      </a>

      <ul className="footer_links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/maheshavp/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/MaheshaVP" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/__mahesh___03___/" target="blank">
          <FaInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; {year} Mahesh portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
