import React from 'react';
import '../stylesheets/About.css';

const AboutMe = () => {
  return (
    <div id="about" className="flex-row flex-center">
      <div className="flex-item-half">
        <h2>This is the about me component.</h2>
        <h4>Fast, Reliable and Creative</h4>
        <p>
          As a career creative, I've applied my unique skills towards building
          real-world applications. Always an educator, I've been teaching young
          children the art of web programming for 2 years.
        </p>
      </div>
      <div className="flex flex-item-third">
        <h2>An Image will be here</h2>
      </div>
    </div>
  );
};

export default AboutMe;
