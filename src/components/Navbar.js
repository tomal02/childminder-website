import './Navbar.css';
import React from 'react';

import logo from '../logo.jpeg';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <img src={logo} alt="logo" className="logo" />
        <li>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
