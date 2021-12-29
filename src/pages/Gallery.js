import './Page.css';
import './Gallery.css';
import React from 'react';
import photo1 from '../gallery-photo1.jpeg';

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <h3>GALLERY</h3>
      <p>A collection of various pictures of my setting</p>
      <div className="row">
        <div className="column">
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
        </div>
        <div className="column">
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
        </div>
        <div className="column">
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
          <img src={photo1} alt="of kid" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
