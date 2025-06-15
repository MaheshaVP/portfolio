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

const softSkills = [
  {
    title: "Problem Solving",
    icon: <FaLightbulb className="service-icon" />,
  },
  {
    title: "Team Collaboration",
    icon: <FaUsers className="service-icon" />,
  },
  {
    title: "Communication",
    icon: <FaComments className="service-icon" />,
  },
  {
    title: "Time Management",
    icon: <FaClock className="service-icon" />,
  },
  {
    title: "Continuous Learning",
    icon: <FaBook className="service-icon" />,
  },
  {
    title: "Adaptability",
    icon: <FaSyncAlt className="service-icon" />,
  },
];

const Services = () => {
  return (
    <section id="services">
      <h2>Soft Skills</h2>
      <div className="container services_container">
        {softSkills.map((skill, index) => (
          <article className="service" key={index}>
            <div className="service-head">
              {skill.icon}
              <h3>{skill.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
