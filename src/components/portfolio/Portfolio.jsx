import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/projects/project1.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 2,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 3,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 4,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 5,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 6,
    image: Img1,
    title: "Gym Website",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ height: "50vh" }}>
      <h5>my recent works</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className="btn">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="__blank"
            >
              Demo link
            </a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  );
};

export default Portfolio;
