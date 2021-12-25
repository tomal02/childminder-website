import './Page.css';
import React from 'react';
import childPhoto from '../child3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>CONTACT</h3>
        <p>
          <a
            href="https://www.facebook.com/WestMoleseyChildminder"
            className="cool-link"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <br />
          <a
            href="https://www.instagram.com/moleseychildminder"
            className="cool-link"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <br />
          <a href="tel:07905163951" className="cool-link">
            <FontAwesomeIcon icon={faPhone} /> 07905163951
          </a>
          <br />
          <a href="mailto:mariannelee1974@hotmail.com" className="cool-link">
            <FontAwesomeIcon icon={faEnvelope} /> mariannelee1974@hotmail.com
          </a>
          <br />
          <a href="https://goo.gl/maps/qCZnv3hY1qpTgPBm9" className="cool-link">
            <FontAwesomeIcon icon={faMapMarkedAlt} /> West Molesey, Surrey
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
