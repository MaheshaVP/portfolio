import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/projects/project1.png";
import Img2 from "../../assets/projects/project2.png";
import Img3 from "../../assets/projects/project3.png";
import Img4 from "../../assets/projects/project4.png";
import Img5 from "../../assets/projects/project5.png";
import Img6 from "../../assets/projects/project6.png";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/MaheshaVP",
    demo: "https://maheshavp.github.io/ecommerce-gym-website/",
  },
  {
    id: 2,
    image: Img2,
    title: "Weather App",
    github: "https://github.com/MaheshaVP",
    demo: "https://maheshavp.github.io/weather-application/",
  },
  {
    id: 3,
    image: Img3,
    title: "Fruits Store",
    github: "https://github.com/MaheshaVP",
    demo: "https://maheshavp.github.io/fruits-store/",
  },
  {
    id: 4,
    image: Img4,
    title: "Todo List",
    github: "https://github.com/MaheshaVP",
    demo: "https://github.com/MaheshaVP",
  },
  {
    id: 5,
    image: Img5,
    title: "Coffee Shop",
    github: "https://github.com/MaheshaVP",
    demo: "https://maheshavp.github.io/Skybound-Coffee/",
  },
  {
    id: 6,
    image: Img6,
    title: "Education Institute",
    github: "https://github.com/MaheshaVP",
    demo: "https://maheshavp.github.io/SkillBoost-Academy/",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <motion.div
        className="container portfolio_container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {data.map(({ id, image, title, github, demo }) => (
          <motion.article
            key={id}
            className="portfolio_item"
            variants={itemVariants}
          >
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go Live
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
