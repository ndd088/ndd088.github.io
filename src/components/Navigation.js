import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faImages, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import '../assets/styles/App.css';

const Navigation = () => (
  <nav className="navigation-menu">
    <ul className="navigation-menu__ul">
      <li className="navigation-menu__ul-li">
        <Link
          to="about-me"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faUser} /> 
          <span>About Me</span>
        </Link>
      </li>
      <li className="navigation-menu__ul-li">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faBriefcase} /> 
          <span>Experience</span>
        </Link>
      </li>
      <li className="navigation-menu__ul-li">
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faGraduationCap} /> 
          <span>Education</span>
        </Link>
      </li>
      <li className="navigation-menu__ul-li">
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faImages} /> 
          <span>Portfolio</span>
        </Link>
      </li>
      <li className="navigation-menu__ul-li">
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faEnvelope} /> 
          <span>Contacts</span>
        </Link>
      </li>
      <li className="navigation-menu__ul-li">
        <Link
          to="feedback"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faComments} /> 
          <span>Feedback</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;