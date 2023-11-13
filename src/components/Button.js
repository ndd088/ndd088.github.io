import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/App.css';

const Button = ({ icon, text, className, textClassName, onClick }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} />}
    {text && <span className={`btn-text ${textClassName}`}>{text}</span>}
  </button>
);

export default Button;