import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.css';

const Feedback = ({ data, title }) => (
  <div>
  <h2>{title}</h2>
  <ul className="feedback-list">
    {data.map((feedback, index) => (
      <li key={index}>
        <p>{feedback.feedback}</p>
        <div className="reporter">
          <img src={feedback.reporter.photoUrl} alt={feedback.reporter.name} />
          <p>{feedback.reporter.name}</p>
          <Link to={feedback.reporter.citeUrl}>Source</Link>
        </div>
      </li>
    ))}
  </ul>
  </div>
);

export default Feedback;