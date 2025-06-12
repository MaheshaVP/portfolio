import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section id='services'>
      <h2>Soft Skills</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service-head">
            <h3>Problem Solving</h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Able to analyze and debug issues efficiently in both frontend and backend code.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service-head">
            <h3>Team Collaboration</h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Able to analyze and debug issues efficiently in both frontend and backend code.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service-head">
            <h3>Problem Solving</h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Comfortable working in teams using version control (GitHub) and participating in collaborative projects.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service-head">
            <h3>Communication </h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Can clearly explain technical concepts and project ideas in a simple way.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service-head">
            <h3>Time Management</h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Balances learning, project work, and deadlines effectively.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service-head">
            <h3>Continuous Learning</h3>
          </div>
          <ul className="service-list">
            <li>
              <p>Actively learning full-stack development and building real-world projects to improve skills.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services