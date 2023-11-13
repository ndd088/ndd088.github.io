import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PhotoBox from './PhotoBox';
import Button from './Button';
import Navigation from './Navigation';
import userAvatar from '../assets/images/user-avatar.png';
import { usePanelContext } from '../contexts/PanelContext';
import '../assets/styles/App.css';

const Panel = () => {
  const { isPanelOpen } = usePanelContext();
  const panelClassName = `panel ${isPanelOpen ? 'open' : ''}`;
  
  return (
    <aside className={panelClassName}>
      <PhotoBox name="John Doe" avatar={userAvatar} />
      <Navigation />
      <Button icon={faChevronLeft} text="Go back" className="go-back-icon" textClassName="go-back-text" onClick={() => window.location.href = "/"} />
    </aside>
  );
};

export default Panel;