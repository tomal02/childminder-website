import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpeg';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <img src={logo} alt="logo" className="logo" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
