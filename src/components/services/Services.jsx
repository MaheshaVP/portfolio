import React from "react";
import "./Services.css";
import {
  FaLightbulb,
  FaUsers,
  FaComments,
  FaClock,
  FaBook,
  FaSyncAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const softSkills = [
  { title: "Problem Solving", icon: <FaLightbulb className="service-icon" /> },
  { title: "Team Collaboration", icon: <FaUsers className="service-icon" /> },
  { title: "Communication", icon: <FaComments className="service-icon" /> },
  { title: "Time Management", icon: <FaClock className="service-icon" /> },
  { title: "Continuous Learning", icon: <FaBook className="service-icon" /> },
  { title: "Adaptability", icon: <FaSyncAlt className="service-icon" /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2>Soft Skills</h2>
      <motion.div
        className="container services_container"
        variants={containerVariants}
      >
        {softSkills.map((skill, index) => (
          <motion.article className="service" key={index} variants={cardVariants}>
            <div className="service-head">
              {skill.icon}
              <h3>{skill.title}</h3>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
