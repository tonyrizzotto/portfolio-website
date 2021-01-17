import React from 'react';
import '../stylesheets/Hero.css';

const Hero = (props) => {
  return (
    <div>
      <div className="hero flex-column flex-center hero-text">
        <h1>Hello, I'm {props.myName}.</h1>
        <h2>A creative full-stack web developer based in Boston.</h2>
        <button className="hero-btn hollow button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
