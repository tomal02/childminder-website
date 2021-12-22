import './Navbar.css';
import React from 'react';
import logo from '../logo.jpeg';
import { Navbar, Nav, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#welcome">
            <img
              alt=""
              src={logo}
              width="90"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#welcome">
              <Link
                activeClass="active"
                to="welcome"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Welcome
              </Link>
            </Nav.Link>
            <Nav.Link href="#about">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
