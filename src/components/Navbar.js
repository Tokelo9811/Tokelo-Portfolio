import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">TM</div>
      
      {/* Hamburger menu button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#career" onClick={toggleMenu}>Career</a></li>
        <li><a href="#education" onClick={toggleMenu}>Education</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 