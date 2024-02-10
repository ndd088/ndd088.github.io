import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';

const Expertise = ({ data, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <div>
      <h2>{title}</h2>
      {loading ? (
        <p>Loading expertise data...</p>
      ) : (
        <ul className="expertise-list">
          {data.map((exp, index) => (
            <li key={index}>
              <div>{exp.date}</div>
              <div>
                <strong>{exp.title}</strong>
                <p>{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expertise;
