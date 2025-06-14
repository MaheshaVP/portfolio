import React from 'react';
import './Services.css';

const softSkills = [
  {
    title: "Problem Solving",
    description: "Quickly analyze and resolve issues in both frontend and backend code through logical thinking and debugging strategies."
  },
  {
    title: "Team Collaboration",
    description: "Work effectively in teams using Git and GitHub, contributing to shared codebases and coordinating in agile workflows."
  },
  {
    title: "Communication",
    description: "Explain technical concepts clearly and confidently to both technical and non-technical stakeholders."
  },
  {
    title: "Time Management",
    description: "Efficiently prioritize tasks, meet deadlines, and maintain a consistent learning and development pace."
  },
  {
    title: "Continuous Learning",
    description: "Proactively learning full-stack technologies and applying new knowledge by building real-world projects."
  },
  {
    title: "Adaptability",
    description: "Comfortable learning new tools, frameworks, and adapting to changing project requirements and environments."
  },
];

const Services = () => {
  return (
    <section id='services'>
      <h2>Soft Skills</h2>
      <div className="container services_container">
        {softSkills.map((skill, index) => (
          <article className='service' key={index}>
            <div className="service-head">
              <h3>{skill.title}</h3>
            </div>
            <ul className="service-list">
              <li>
                <p>{skill.description}</p>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
