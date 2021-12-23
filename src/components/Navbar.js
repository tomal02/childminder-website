import './Navbar.css';
import React from 'react';
import logo from '../logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light" fixed="top" className="border">
        <Container>
          <Navbar.Brand href="#welcome">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'Molesey Childminder'}
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
            <Nav.Link href="#gallery">
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Gallery
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default NavigationBar;
