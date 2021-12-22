import './Page.css';
import React from 'react';
import { Link } from 'react-scroll';

const Welcome = () => {
  return (
    <div id="welcome">
      <h1>Welcome</h1>
      <p>
        Hi! I'm <strong> Marianne Lee</strong>, an experienced and caring
        childminder based in Molesey, Surrey.
      </p>
      <h3>
        Rated "Outstanding" by Ofsted Feb 2020 & Feb 2016. I provide a
        fun,educational and homely environment
      </h3>
      <button>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Contact me!
        </Link>
      </button>
    </div>
  );
};

export default Welcome;
