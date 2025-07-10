import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    'Frontend': ['React.JS','React Native','Next.JS', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'],
    'Backend': ['Node.js', 'Express.JS', 'MongoDB', 'MySQL', 'SQL'],
    'Tools & Technologies': ['Git Control', 'Bitbucket', 'Firebase','Github','CI/CD','Pipelines Postman','Swagger' ],
    'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Project Management', 'Agile Methodology']
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 