import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from './PhotoBox';
import Button from './Button';
import Navigation from './Navigation';
import userAvatar from '../assets/images/me-round.png';
import { usePanelContext } from '../contexts/PanelContext';
import '../assets/styles/App.css';
import innerBackground from '../assets/images/background.mp4';

const Panel = () => {
  const { isPanelOpen } = usePanelContext();
  const panelClassName = `panel ${isPanelOpen ? 'open' : ''}`;

  return (
    <aside className={panelClassName}>
      <video autoPlay loop muted className="panel-video">
        <source src={innerBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="panel-content">
        <PhotoBox name="Nana Dzigua" avatar={userAvatar} />
        <Navigation />
        <Button 
          icon={faChevronLeft} 
          text="Go back" 
          className="go-back-icon" 
          textClassName="go-back-text" 
          onClick={() => window.location.href = "/"} 
        />
      </div>
    </aside>
  );
};

export default Panel;