import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Career />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
