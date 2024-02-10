import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from './PhotoBox';
import Button from './Button';
import Navigation from './Navigation';
import userAvatar from '../assets/images/me-round.png';
import { usePanelContext } from '../contexts/PanelContext';
import '../assets/styles/App.css';
import innerBackground from '../assets/images/background.jpg';

const Panel = () => {
  const { isPanelOpen } = usePanelContext();
  const panelClassName = `panel ${isPanelOpen ? 'open' : ''}`;

  const panelStyles = {
    backgroundImage: `url(${innerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  
  return (
    <aside className={panelClassName} style={panelStyles} >
      <PhotoBox name="Nana Dzigua" avatar={userAvatar} />
      <Navigation />
      <Button icon={faChevronLeft} text="Go back" className="go-back-icon" textClassName="go-back-text" onClick={() => window.location.href = "/"} />
    </aside>
  );
};

export default Panel;