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
          <a href="https://goo.gl/maps/qCZnv3hY1qpTgPBm9">
            <FontAwesomeIcon icon={faMapMarkedAlt} /> 15 Chalford Close
          </a>
        </li>
        <li>
          <a href="mail.google.com">
            <FontAwesomeIcon icon={faEnvelope} /> mariannelee1974@hotmail.com
          </a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon icon={faPhone} /> 07905163951
          </a>
        </li>
        <li>
          <a href="twitter.com">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
        <li>
          <a href="facebook.com">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactBar;
