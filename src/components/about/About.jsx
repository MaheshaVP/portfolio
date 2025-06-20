import React from "react";
import "./About.css";
import ME from "../../assets/Mahesh.jpg";
import { GoProjectSymlink } from "react-icons/go";
import { LuAward } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 + 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Get To Know
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>

      <div className="container about_container">
        {/* Image section */}
        <motion.div
          className="about_me"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="about_me-image">
            <img src={ME} alt="About img" />
          </div>
        </motion.div>

        {/* Content section */}
        <motion.div
          className="about_content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Cards */}
          <div className="about_cards">
            {[LuAward, GoProjectSymlink, BiSupport].map((Icon, i) => (
              <motion.article
                key={i}
                className="about_card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Icon className="about_icon" />
                <h5>{["Experience", "Projects", "Contact"][i]}</h5>
                <small>
                  {["Fresher learning", "6+ completed", "24/7 available"][i]}
                </small>
              </motion.article>
            ))}
          </div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false }}
          >
            I’m{" "}
            <strong style={{ color: "var(--color-primary)" }}>
              Mahesha V P
            </strong>
            , a passionate and goal-oriented <strong>BCA graduate</strong>{" "}
            focused on becoming a skilled{" "}
            <strong>Python Full Stack Developer</strong>. I have practical
            knowledge of HTML, CSS, Bootstrap, JavaScript, React, and Python. I
            enjoy building responsive, user-friendly web applications and
            continuously learning new technologies to grow as a developer and
            achieve success in the IT industry.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#contact"
            className="btn btn-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
