import './Page.css';
import React from 'react';
import childPhoto from '../child3.jpg';

const Contact = () => {
  return (
    <section id="contact">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>CONTACT</h3>
        <p>This is the contact section</p>
      </div>
    </section>
  );
};

export default Contact;
