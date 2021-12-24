import './Page.css';
import React from 'react';
import childPhoto from '../child1.jpg';

const Welcome = () => {
  return (
    <section id="welcome">
      <img src={childPhoto} alt="unsplash-img" />
      <div>
        <h3>WELCOME</h3>
        <p>I'm a childminder based in Surrey.</p>
        <p>
          I provide a fun, safe and educational environment for your children.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
