import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="loader-container">
      <FontAwesomeIcon className="icon" icon={faSyncAlt} spin />
    </div>
  );
};

export default Loader;