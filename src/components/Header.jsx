import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/self-closing-comp */
const Header = () => (
  <header className="wrapper">
    <nav className="navbar">
      <div className="brand"><i className="fa fa-graduation-cap fa-2x"></i></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
