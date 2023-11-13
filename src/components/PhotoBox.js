import React from 'react';
import '../assets/styles/App.css';

const PhotoBox = ({ name, title, description, avatar }) => (
  <div className="photo-box">
    <img src={avatar} alt={name} />
    <h2>{name}</h2>
    <p>{title}</p>
    <p>{description}</p>
  </div>
);

export default PhotoBox;