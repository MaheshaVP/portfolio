import React from "react";
import "./Qualification.css";

const Qualification = () => {
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
            {/* Web Developer */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Java Full Stack</h3>
                <span className="qualification_subtitle">
                  Nirmaan Organization
                </span>
                <div className="qualification_calender">2025 - Feb</div>
              </div>
              <span className="qualification_rounded"></span>
              <span className="qualification_line"></span>
            </div>

            {/* BCA */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Bachelor of Computer Applications
                </h3>
                <span className="qualification_subtitle">
                  Nrupathunga University
                </span>
                <div className="qualification_calender">2021 - 2024</div>
              </div>
              <span className="qualification_rounded"></span>
              <span className="qualification_line"></span>
            </div>

            {/* PUC */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Pre-University Course (12th)
                </h3>
                <span className="qualification_subtitle">Govt PU College</span>
                <div className="qualification_calender">2019 - 2021</div>
              </div>
              <span className="qualification_rounded"></span>
              <span className="qualification_line"></span>
            </div>

            {/* SSLC */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Secondary School Leaving Certificate (10th)
                </h3>
                <span className="qualification_subtitle">Govt High School</span>
                <div className="qualification_calender">2019</div>
              </div>
              <span className="qualification_rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
