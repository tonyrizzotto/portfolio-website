// function to add and remove the hidden class on click
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
});
