import React from 'react';
import './Hero.css';
import bgImage from '../coding-bg.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Tokelo Magutle</h1>
        <p className="hero-text">
        Full-Stack Software Engineer | React Native, React.js, Node.js, Express.js & MongoDB Expert | Cross-Platform App Development
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">View Projects</a>
          <a href="#footer" className="hero-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 