import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const skills = [
  "HTML", "CSS", "JavaScript", "React.js",
  "Bootstrap", "Tailwind", "REST API", "JSON",
  "Python", "SQL"
];

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className='experience_card'>
          <h3>Frontend & Backend</h3>
          <div className="experience_grid">
            {skills.map((skill, index) => (
              <article key={index} className='experience_item'>
                <BsPatchCheckFill className='experience_icon' />
                <div>
                  <h4>{skill}</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
