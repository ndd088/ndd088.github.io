import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';
import { experienceData } from '../consts'; 

const Expertise = ({ title }) => { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="experience">
      <h2>{title}</h2>
      {loading ? (
        <p>Loading expertise data...</p>
      ) : (
        <ul className="expertise-list">
          {experienceData.map((exp, index) => (
            <li key={index}>
              <div>{exp.date}</div>
              <div>
                <strong>{exp.info.company}</strong> 
                <p>{exp.info.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expertise;