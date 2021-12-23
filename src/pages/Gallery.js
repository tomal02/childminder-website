import './Page.css';
import './Gallery.css';
import React from 'react';
import childPhoto from '../child1.jpg';

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <h3>ABOUT</h3>
      <p>A collection of various pictures of my setting</p>
      <div className="row">
        <div className="column">
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
        </div>
        <div className="column">
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
        </div>
        <div className="column">
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
          <img src={childPhoto} alt="of kid" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
