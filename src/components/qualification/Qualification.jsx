import React from "react";
import { motion } from "framer-motion";
import "./Qualification.css";

const Qualification = () => {
  const qualifications = [
    {
      title: "Java Full Stack",
      subtitle: "Nirmaan Organization",
      calendar: "2025 - Feb",
    },
    {
      title: "Bachelor of Computer Applications",
      subtitle: "Nrupathunga University",
      calendar: "2021 - 2024",
    },
    {
      title: "Pre-University Course (12th)",
      subtitle: "Govt PU College",
      calendar: "2019 - 2021",
    },
    {
      title: "Secondary School Leaving Certificate (10th)",
      subtitle: "Govt High School",
      calendar: "2019",
    },
  ];

  return (
    <section
      id="qualification"
      className="qualification_section qualification container"
    >
      <h5>My personal journey</h5>
      <h2 className="section_title">Qualification</h2>

      <div className="qualification_container">
        <div className="qualification_sections">
          <div className="qualification_content">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                className="qualification_data"
                initial={{ x: index % 2 === 0 ? -150 : 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // 👈 Animate every scroll
              >
                <div>
                  <h3 className="qualification_title">{item.title}</h3>
                  <span className="qualification_subtitle">
                    {item.subtitle}
                  </span>
                  <div className="qualification_calender">{item.calendar}</div>
                </div>
                <span className="qualification_rounded"></span>
                {index !== qualifications.length - 1 && (
                  <span className="qualification_line"></span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
