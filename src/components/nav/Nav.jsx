import React, { useState, useEffect } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let found = false;

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveNav(`#${section.id}`);
          found = true;
        }
      });

      // If no section matches and we're near the top
      if (!found && window.scrollY < 200) {
        setActiveNav("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" className={activeNav === "#home" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#qualification"
        className={activeNav === "#qualification" ? "active" : ""}
      >
        <MdCastForEducation />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
