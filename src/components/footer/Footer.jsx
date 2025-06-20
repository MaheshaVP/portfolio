import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.a
        href="#"
        className="footer_logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Portfolio
      </motion.a>

      <ul className="footer_links">
        {["Home", "About", "Experience", "Projects", "Contact"].map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.1, color: "#00ffff" }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      <div className="footer_socials">
        <motion.a
          href="https://www.facebook.com/"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaFacebookF />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/maheshavp/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <BsLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/MaheshaVP"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/__mahesh___03___/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaInstagram />
        </motion.a>
      </div>

      <motion.div
        className="footer_copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <small>&copy; {year} Mahesh portfolio. All rights reserved.</small>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
