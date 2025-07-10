import React from 'react';
import './Projects.css';
import EatsImage from '../eatshub.png';
import Thumamina from '../Thumamina.png';
import Weather from '../weatherAppP.png';
import Portfolio from '../portfolioP.png'

const Projects = () => {
  const projects = [
    {
      title: 'EatHub Food Delivery App',
      description:
        'EatsHub is a fast and reliable food delivery service based in Polokwane, near the University of Limpopo. It brings your favorite meals from local restaurants straight to your door—on campus, at home, or anywhere nearby. Focused on affordability, speed, and great customer service, EatsHub makes food ordering simple and stress-free. Perfect for students and residents looking for delicious options without the hassle.',
      technologies: ['React Native', 'Express', 'Node.js', 'MongoDB', 'Firebase'],
      image: EatsImage,
    },
    {
      title: 'Thumamina Delivery App',
      description:
        'Thumamina App is a locally-driven delivery platform based in Seshego, built to bring everyday convenience to your fingertips. Whether you\'re ordering food, groceries, or essentials, Thumamina connects you with nearby businesses and gets your order delivered quickly and reliably. Proudly serving the Seshego community, Thumamina is here to support local vendors and make life easier for residents with fast, affordable, and friendly service.',
      technologies: ['React Native Expo', 'Firebase', 'MySQL'],
      image: Thumamina,
    },
    {
      title: 'Weather App',
      description:
        'Stay ahead of the weather with Weather 7, your all-in-one forecast companion. This sleek and intuitive app provides accurate 7-day weather forecasts for any location worldwide. Simply search for a city or town, and instantly view detailed weather information including temperature, conditions, and more.',
      technologies: ['React Native Expo'],
      image: Weather,
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive portfolio website designed to showcase my development work, skills, and contact information.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      image:  Portfolio,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
