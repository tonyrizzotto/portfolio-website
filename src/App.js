import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Hero myName="Tony Rizzotto" />
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default App;
