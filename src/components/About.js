import React from 'react';
import './About.css';
import profileImage from '../TokeloP.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src={profileImage}
            alt="Tokelo P Professional Portrait" 
            className="profile-image"
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer with a strong interest in creating
            innovative solutions. I love working on challenging projects and
            continuously learning new technologies.
          </p>
          <p>
            With a background in software development, I bring a unique perspective
            to problem-solving and a dedication to creating high-quality,
            user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 