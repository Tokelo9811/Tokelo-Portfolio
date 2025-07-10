import React from 'react';
import './Career.css';

const Career = () => {
  const careerTimeline = [
    {
      year: '2024 - current',
      position: 'Full Stack Software Developer',
      company: 'Mzxit (PTY) Ltd',
      description:
        'As a technical lead, I was responsible for managing both front-end and back-end teams, ensuring seamless collaboration and project execution. I provided constructive feedback, monitored performance, and fostered an environment of continuous learning, helping developers grow and deliver high-quality software solutions.',
    },
    {
      year: '2019 - 2023',
      position: 'Mobile Application Developer',
      company: 'EatsHub',
      description: [
        '• Designed and implemented user interfaces for React Native apps, ensuring a seamless user experience.',
        '• Worked on the front-end aspects of React Native applications, integrating APIs.',
        '• Conducted thorough testing and debugging to ensure app functionality and performance.',
      ].join('\n'),
    },
  ];

  return (
    <section id="career" className="career-section">
      <div className="career-container">
        <h2>Career Chronology</h2>
        <div className="timeline">
          {careerTimeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{item.position}</h3>
                <h4>{item.company}</h4>
                <span className="year">{item.year}</span>
                {item.description.split('\n').map((line, i) => (
                  <p key={i} className="description">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
