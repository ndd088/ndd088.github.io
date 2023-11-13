import React from 'react';
import '../assets/styles/App.css';

const TimeLine = ({ data, title }) => (
  <div>
  <h2>{title}</h2>
  <div className="timeline">
    {data.map((event, index) => (
      <div key={index} className="timeline-event">
        <div className="event-date">{event.date}</div>
        <div className="event-details">
          <h3>{event.title}</h3>
          <p>{event.text}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
);

export default TimeLine;