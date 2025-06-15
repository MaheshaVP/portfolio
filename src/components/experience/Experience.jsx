import React from "react";
import "./Experience.css";

import HTML from "../../assets/skillslogo/html.png";
import CSS from "../../assets/skillslogo/css.png";
import JavaScript from "../../assets/skillslogo/javascript.png";
import ReactLogo from "../../assets/skillslogo/react.png";
import Bootstrap from "../../assets/skillslogo/bootstrap.png";
import Tailwind from "../../assets/skillslogo/tailwindcss.png";
import Restapi from "../../assets/skillslogo/api.png";
import Json from "../../assets/skillslogo/json.png";
import Python from "../../assets/skillslogo/python.png";
import Mysql from "../../assets/skillslogo/mysql.png";

const skills = [
  { name: "HTML", logo: HTML, color: "#E34F26" },
  { name: "CSS", logo: CSS, color: "#1572B6" },
  { name: "JavaScript", logo: JavaScript, color: "#F7DF1E" },
  { name: "React.js", logo: ReactLogo, color: "#61DAFB" },
  { name: "Bootstrap", logo: Bootstrap, color: "#7952B3" },
  { name: "Tailwind", logo: Tailwind, color: "#38B2AC" },
  { name: "REST API", logo: Restapi, color: "#F26822" },
  { name: "JSON", logo: Json, color: "#3C873A" },
  { name: "Python", logo: Python, color: "#3776AB" },
  { name: "MySQL", logo: Mysql, color: "#00758F" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="experience_item"
              style={{ "--hover-color": skill.color }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="experience_logo"
              />
              <p className="experience_name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
