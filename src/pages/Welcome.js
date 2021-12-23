import './Page.css';
import React from 'react';
import { Link } from 'react-scroll';
import childPhoto from '../child1.jpg';

const Welcome = () => {
  return (
    <section id="welcome">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>HOME</h3>
        <p>This is the home section</p>
      </div>
    </section>
  );
};

export default Welcome;
