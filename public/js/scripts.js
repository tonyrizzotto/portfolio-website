// To be run AFTER page loads
document.addEventListener('DOMContentLoaded', function () {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navBar = document.getElementById('nav-bar');

  // Get the offset position of the navbar
  var sticky = navBar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navBar.classList.add('sticky');
    } else {
      navBar.classList.remove('sticky');
    }
  }
});
