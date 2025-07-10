import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Demonstrated expertise in designing distributed systems on AWS.',
      link: '#'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      description: 'Certified in developing and deploying applications on Google Cloud Platform.',
      link: '#'
    },
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2022',
      description: 'Proven ability to design, build, test, and maintain cloud applications.',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2>Certifications</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <span className="date">{cert.date}</span>
                <p>{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 