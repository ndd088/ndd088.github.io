import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faImages, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import '../assets/styles/App.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__ul">
        <li className="navigation-menu__ul-li">
          <Link
            className={`navigation-menu__ul-li-link ${activeLink === 'about-me' ? 'active-link' : ''}`}
            activeClass="active-link"
            to="about-me"
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={handleSetActive}
          >
            <FontAwesomeIcon icon={faUser} /> 
            <span>About Me</span>
          </Link>
        </li>
        <li className="navigation-menu__ul-li">
          <Link
            className={`navigation-menu__ul-li-link ${activeLink === 'experience' ? 'active-link' : ''}`}
            activeClass="active-link"
            to="experience"
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={handleSetActive}
          >
            <FontAwesomeIcon icon={faBriefcase} /> 
            <span>Experience</span>
          </Link>
        </li>
        <li className="navigation-menu__ul-li">
          <Link
            className={`navigation-menu__ul-li-link ${activeLink === 'tools' ? 'active-link' : ''}`}
            activeClass="active-link"
            to="my-tools-container"
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={handleSetActive}
          >
            <FontAwesomeIcon icon={faGraduationCap} /> 
            <span>My Tools</span>
          </Link>
        </li>
        <li className="navigation-menu__ul-li">
          <Link
            className={`navigation-menu__ul-li-link ${activeLink === 'portfolio' ? 'active-link' : ''}`}
            activeClass="active-link"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={handleSetActive}
          >
            <FontAwesomeIcon icon={faImages} /> 
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="navigation-menu__ul-li">
          <Link
            className={`navigation-menu__ul-li-link ${activeLink === 'contacts' ? 'active-link' : ''}`}
            activeClass="active-link"
            to="contacts"
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={handleSetActive}
          >
            <FontAwesomeIcon icon={faEnvelope} /> 
            <span>Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;