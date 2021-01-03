import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

export default () => {
  return (
    <div>
      <Hero myName="Tony Rizzotto" />
      <NavBar />
    </div>
  );
};
