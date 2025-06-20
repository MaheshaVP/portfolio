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
      label: "LinkedIn",
    },
    {
      id: 1,
      href: "https://github.com/MaheshaVP",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      id: 2,
      href: "https://www.instagram.com/__mahesh___03___/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <div className="header_socials">
      {socials.map(({ id, href, icon, label }) => (
        <motion.a
          key={id}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noreferrer"
          custom={id}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          viewport={{ once: false, amount: 0.4 }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default HeaderSocials;
