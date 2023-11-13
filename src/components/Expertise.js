import React from 'react';
import '../assets/styles/App.css';

const Expertise = ({ data, title }) => (
  <div>
    <h2>{title}</h2>
    <ul className="expertise-list">
      {data.map((exp, index) => (
        <li key={index}>
          <div>{exp.date}</div>
          <div>
            <strong>{exp.info.company}</strong>
            <p>{exp.info.job}</p>
            <p>{exp.info.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Expertise;