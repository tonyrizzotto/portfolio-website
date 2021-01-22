// Store all project information
const projects = [
  (project1 = {
    name: 'fretscapes.com',
    description: '',
    link: 'https://fretscapes.com',
  }),
  (project2 = {
    name: 'Vanilla JS Todo-App',
    description: '',
    link: 'https://github.com/tonyrizzotto/vanilla-js-todo',
  }),
  (project3 = {
    name: 'Dinosaur Infographic SPA',
    description: '',
    link: 'https://tonyrizzotto.com/projects/dinosaur-infographic',
  }),
  (project4 = {
    name: 'Casting Agency API',
    description: '',
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
  //

  arrayOfProjects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    container.appendChild(projectDiv);

    const title = document.createElement('h3');
    title.innerHTML = project.name;
    projectDiv.appendChild(title);
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
