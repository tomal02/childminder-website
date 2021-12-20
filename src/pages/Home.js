import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <button>
        <Link to="/contact">Contact me!</Link>
      </button>
    </div>
  );
};

export default Home;
