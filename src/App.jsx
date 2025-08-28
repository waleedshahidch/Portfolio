import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;