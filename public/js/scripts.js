// Store all project information
const projects = [
  (project1 = {
    name: 'tonyrizzotto.com',
    languages: 'React / Styling / OOP',
    description:
      'This website your at is actually a Single-Page Web Application!',
    link: 'https://fretscapes.com',
    imageUrl: './images/project1.jpg',
  }),
  (project2 = {
    name: 'fretscapes.com',
    languages: 'HTML, CSS, Javascript',
    description: 'This is a custom build website with a sales funnel.',
    link: 'https://fretscapes.com',
    imageUrl: './images/project1.jpg',
  }),
  (project3 = {
    name: 'Vanilla JS Todo-App',
    languages: 'Javascript',
    description:
      'A single page application built using vanilla javascript and the local browser storage.',
    link: 'https://github.com/tonyrizzotto/vanilla-js-todo',
    imageUrl: './images/project2.jpg',
  }),
  (project4 = {
    name: 'Dinosaur Infographic SPA',
    languages: 'HTML, CSS, Javscript',
    description:
      'The first project of the Udacity Intermediate Javascript Nanodegree.',
    link: 'https://tonyrizzotto.com/projects/dinosaur-infographic',
  }),
  (project5 = {
    name: 'Casting Agency API',
    languages: 'Python/Flask, Auth0, Heroku',
    description:
      "My capstone project for completion of Udacity's Full Stack Nano Degree. Graduated Dec. 2020.",
    link: 'https://infinite-wildwood-17516.herokuapp.com/',
  }),
];

/**
 * @description This function will take an array of elements and add event listeners that add/remove a hidden class to show content in the DOM.
 * @param {*} arrayOfItems
 */
function createListeners(arrayOfItems) {
  //set an empty array
  let contentArray = [];

  //populate linkArray with items
  arrayOfItems.forEach((item) => {
    //populate the array with item content
    contentArray.push(item.content);

    //add a listener to each item link
    item.link.addEventListener('click', function () {
      // If content was not clicked, add hidden class
      contentArray.forEach((content) => {
        if (item.content === content) {
          item.content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * @description This function will dynamically create all project preview containers in the Projects section.
 * @param {*} container
 * @param {*} arrayOfProjects
 */
function createProjectContainers(container, arrayOfProjects) {
  arrayOfProjects.forEach((project) => {
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.style.backgroundImage = `url(${project.imageUrl})`;
    // projectDiv.setAttribute('onmouseover', 'mouseHover()');
    container.appendChild(projectDiv);

    let title = document.createElement('h2');
    title.innerText = project.name;
    projectDiv.appendChild(title);

    let languageTitle = document.createElement('h4');
    languageTitle.innerText = project.languages;
    projectDiv.appendChild(languageTitle);

    let description = document.createElement('p');
    description.innerText = project.description;
    description.classList.add('hidden');
    projectDiv.appendChild(description);

    projectDiv.addEventListener('mouseover', function () {
      description.classList.remove('hidden');
    });
    projectDiv.addEventListener('mouseleave', function () {
      description.classList.add('hidden');
    });
  });
}

// To be run AFTER page loads
document.addEventListener('DOMContentLoaded', function () {
  //compile DOM elements
  let domItems = [
    (home = {
      content: document.getElementById('home'),
      link: document.getElementById('top-left'),
      active: true,
    }),
    (about = {
      content: document.getElementById('about'),
      link: document.getElementById('bottom-right'),
      active: false,
    }),
    (portfolio = {
      content: document.getElementById('portfolio'),
      link: document.getElementById('top-right'),
      active: false,
    }),
    (contact = {
      content: document.getElementById('contact'),
      link: document.getElementById('bottom-left'),
      active: false,
    }),
  ];

  createListeners(domItems);

  // Get the Project Container
  let projectContainer = document.getElementById('project-container');

  // Call project creation function
  createProjectContainers(projectContainer, projects);
});
