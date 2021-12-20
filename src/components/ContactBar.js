import './ContactBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const ContactBar = () => {
  return (
    <div className="contact-bar">
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
          <a className="cool-link">
            <FontAwesomeIcon icon={faPhone} /> 07905163951
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" className="cool-link">
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
