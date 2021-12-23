import './ContactBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactBar = () => {
  return (
    <div className="contact-bar" id="desktop-only">
      <ul>
        <li>
          <a href="https://goo.gl/maps/qCZnv3hY1qpTgPBm9" className="cool-link">
            <FontAwesomeIcon icon={faMapMarkedAlt} /> 15 Chalford Close
          </a>
        </li>
        <li>
          <a href="mailto:mariannelee1974@hotmail.com" className="cool-link">
            <FontAwesomeIcon icon={faEnvelope} /> mariannelee1974@hotmail.com
          </a>
        </li>
        <li>
          <a href="tel:07905163951" className="cool-link">
            <FontAwesomeIcon icon={faPhone} /> 07905163951
          </a>
        </li>
        <li> |</li>
        <li>
          <a
            href="https://www.twitter.com"
            className="cool-link"
            id="socials-start"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" className="cool-link">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="cool-link">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactBar;
