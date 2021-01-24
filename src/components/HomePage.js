import React from 'react';
import '../stylesheets/HomePage.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = (props) => {
  return (
    <div id="hero" className="hero hero-text">
      <div className="bg-box"></div>
      <div id="home">
        <h1>Hello, I'm {props.myName}</h1>
        <h2>A creative full-stack web developer based in Boston.</h2>
        <button id="hero-btn" className="hollow button">
          Learn More
        </button>
      </div>
      <div id="about" className="hidden">
        <AboutMe />
      </div>
      <div id="portfolio" className="hidden">
        <Projects />
      </div>
      <div id="contact" className="hidden">
        <Contact />
      </div>

      <div id="top-left" className="link-box top-left">
        Tony Rizzotto
      </div>
      <div id="top-right" className="link-box top-right">
        Portfolio
      </div>
      <div id="bottom-left" className="link-box bottom-left">
        Contact
      </div>
      <div id="bottom-right" className="link-box bottom-right">
        About me
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
