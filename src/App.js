import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Toastmasters from './components/sections/Toastmasters';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router basename="/portfolio">
      <Layout>
        <div className="space-y-12">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Toastmasters />
          <Contact />
        </div>
      </Layout>
    </Router>
  );
}

export default App;