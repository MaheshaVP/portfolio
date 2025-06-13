import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/projects/project1.png";
import Img2 from "../../assets/projects/project2.png";
import Img3 from "../../assets/projects/project3.png";
import Img4 from "../../assets/projects/project4.png";
import Img5 from "../../assets/projects/project5.png";
import Img6 from "../../assets/projects/project6.png";



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
    image: Img2,
    title: "Weather App",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 3,
    image: Img3,
    title: "Fruits Store",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 4,
    image: Img4,
    title: "Todo List",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 5,
    image: Img5,
    title: "Coffee Shop",
    github: "https://github.com/maheshvp",
    demo: "https://github.com/maheshvp",
  },

  {
    id: 6,
    image: Img6,
    title: "Education Institute",
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
