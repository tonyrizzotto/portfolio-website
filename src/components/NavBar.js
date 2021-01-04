import React from 'react';
import '../stylesheets/NavBar.css';

let navbar = document.getElementById('nav-bar');

function getSticky() {
  if (window.pageYOffset >= 850) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
window.onscroll = () => {
  getSticky();
};

const NavBar = () => {
  return (
    <div id="nav-bar">
      <li>One</li>
      <li>two</li>
      <li>three</li>
    </div>
  );
};

export default NavBar;
