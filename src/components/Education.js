import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bsc Physical Science',
      university: 'University of Limpopo',
      year: '2019 - 2022',
      description: 'I attended University of Limpopo from 2018 to 2022 , where I started Bsc Physical Science and completed Modules in Chemistry (General Chemistry,Organic chemistry , Analytical Chemistry and Physical Chemistry) , Physics ( General Physics, Classical Mechanics , Electrodynamics and Electronics, Modern Physics and waves and physical optics ) and Maths ( Differential and integral Calculus) . Through this experience I developed skills like Time Management, Teamwork , Communication, Problem solving and Adaptability that have prepared me for future academic and professional pursuits.'
    },
    {
      degree: 'Grade 12',
      university: 'Lehwelere High School',
      year: '2017',
      description: 'During my high School career, I enrolled in Mathematics and Science subjects where I applied my self diligently and achieved outstanding results'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <h3>{item.degree}</h3>
              <h4>{item.university}</h4>
              <span className="year">{item.year}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 