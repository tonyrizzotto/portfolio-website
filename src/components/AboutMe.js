import React from 'react';
import '../stylesheets/About.css';

const AboutMe = () => {
  return (
    <div id="about">
      <div id="about-text" className="">
        <h2>
          Hi! My name is Tony Rizzotto and I'm a{' '}
          <i>Full Stack Web Developer</i> based in Boston, MA.
        </h2>
        <h3>Fast, Reliable and Creative</h3>
        <p>
          As a career creative, I've applied my unique skills towards building
          real-world applications. Always an educator, I've been teaching
          children music and programming at my online school fretscapes.com for
          over 7 years.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
