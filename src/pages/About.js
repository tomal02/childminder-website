import './Page.css';
import React from 'react';
import childPhoto from '../child2.jpg';

const About = () => {
  return (
    <section id="about">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>ABOUT</h3>
        <p>This is the about section</p>
      </div>
    </section>
  );
};

export default About;
