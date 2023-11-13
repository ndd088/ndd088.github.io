import React from 'react';
import '../assets/styles/App.css';
import Info from './Info';

const Box = ({ title, content }) => (
  <div className="box">
    <h2>{title}</h2>
    <Info text={content} />
  </div>
);

export default Box;
