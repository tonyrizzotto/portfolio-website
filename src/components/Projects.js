import React from 'react';
import '../stylesheets/Projects.css';

const Projects = () => {
  return (
    <div className="flex-row flex-center" id="project-container">
      <div className="flex-item-third">
        <h3>Project 1</h3>
      </div>
      <div className="flex-item-third">
        <h3>Project 2</h3>
      </div>
      <div className="flex-item-third">
        <h3>Project 3</h3>
      </div>
    </div>
  );
};

export default Projects;
