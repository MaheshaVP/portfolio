import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const HeaderSocials = () => {
  const socials = [
    {
      id: 0,
      href: "https://www.linkedin.com/in/maheshavp/",
      icon: <BsLinkedin />,
    },
    {
      id: 1,
      href: "https://github.com/MaheshaVP",
      icon: <FaGithub />,
    },
    {
      id: 2,
      href: "https://www.instagram.com/__mahesh___03___/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="header_socials">
      {socials.map(({ id, href, icon }) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          custom={id}
          initial="hidden"
          whileInView="visible"
          variants={iconVariants}
          viewport={{ once: true }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default HeaderSocials;
