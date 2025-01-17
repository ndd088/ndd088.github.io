import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';
import Expertise from '../components/Expertise';
import Form from '../components/Form';
import MyTools from '../components/Tools';
import Portfolio from '../components/Portfolio';
import AboutMe from '../components/AboutMe';
import { experienceData, feedbackData } from '../consts';
import '../assets/styles/App.css';
import Address from '../components/Address';
import { usePanelContext } from '../contexts/PanelContext';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Feedback from '../components/Feedback';

const Inner = () => {
  const { isPanelOpen, togglePanel } = usePanelContext();

  const containerStyles = {
    marginLeft: isPanelOpen ? '20%' : '0',
    transition: 'margin-left 0.2s ease-in-out',
  };

  return (
    <div className="inner" style={containerStyles}>
      <Panel className="panel open" />
      <Button icon={faBars} onClick={togglePanel} className="sidebar-icon" />
      <Element name="aboutMe" className="about-me">
        <AboutMe />
      </Element>
      <Element name="experience">
        <Expertise data={experienceData} title="Experience" />
      </Element>
     <Element name="tools" className="my-tools-container">
        <MyTools title="My Tools" />
     </Element>
      <Element name="portfolio" className="portfolio-main">
        <Portfolio title="Portfolio" />
      </Element>
      <Element name="contacts" className="contacts">
        <Address title="Contacts" />
      </Element>
    </div>
  );
};

export default Inner;