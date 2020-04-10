import React from 'react';
import Nav from './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="#" className="navigation__item">My profile</a>
      <a href="#" className="navigation__item">Messages</a>
      <a href="#" className="navigation__item">News</a>
      <a href="#" className="navigation__item">Music</a>
      <a href="#" className="navigation__item">Settings</a>
    </nav>
  );
}

export default Navbar;