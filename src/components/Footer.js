import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:tokelomagutles3@gmail.com">tokelomagutles3@gmail.com</a></p>
            <p>Phone: <a href="tel:+27663778921">(+27) 66 377 8921</a></p>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tokelo-magutle-72556b248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon">
                <FaLinkedin /> Tokelo Magutle
              </a>
              <a href="https://github.com/Tokelo9811" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon">
                <FaGithub /> Tokelo9811
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tokelo Magutle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 