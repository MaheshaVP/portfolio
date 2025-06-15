import React from "react";
import "./About.css";
import ME from "../../assets/Mahesh.jpg";
import { GoProjectSymlink } from "react-icons/go";
import { LuAward } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <LuAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher learning</small>
            </article>

            <article className="about_card">
              <GoProjectSymlink className="about_icon" />
              <h5>Projects</h5>
              <small>6+ completed</small>
            </article>

            <article className="about_card">
              <BiSupport className="about_icon" />
              <h5>Contact</h5>
              <small>24/7 available</small>
            </article>
          </div>

          <p>
            I’m{" "}
            <strong style={{ color: "var(--color-primary)" }}>
              Mahesha V P
            </strong>
            , a passionate and goal-oriented <strong>BCA graduate</strong>{" "}
            focused on becoming a skilled Python{" "}
            <strong>Python Full Stack Developer</strong>. I have practical
            knowledge of HTML, CSS, Bootstrap, JavaScript, React, and Python. I
            enjoy building responsive, user-friendly web applications and
            continuously learning new technologies to grow as a developer and
            achieve success in the IT industry.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
