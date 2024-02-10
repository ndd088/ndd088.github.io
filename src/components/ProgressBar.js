import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';

const ProgressBar = ({ progress, isVisible, skillName }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0);
    const intervalId = setInterval(() => {
      if (width >= progress) {
        clearInterval(intervalId);
      } else {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, [progress, isVisible, width]); 

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <div id="myProgress">
        <div id="myBar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemax="100">
        {skillName}, {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;