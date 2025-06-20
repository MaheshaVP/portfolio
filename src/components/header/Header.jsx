import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/header.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* Better Welcome Text Animation */}
        <motion.h2
          className="welcome_text"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Welcome to my Portfolio
        </motion.h2>

        <motion.h5 {...fadeUp(0.1)}>Hello I'm</motion.h5>
        <motion.h1 {...fadeUp(0.2)}>Mahesh</motion.h1>
        <motion.h5 className="text-light" {...fadeUp(0.3)}>
          Web & Python Developer
        </motion.h5>

        <CTA />
        <HeaderSocials />

        {/* Image Container */}
        <motion.div
          className="me"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={ME} alt="My img" />
        </motion.div>

        {/* Scroll Down Floating */}
        <motion.a
          href="#contact"
          className="scroll_down"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
