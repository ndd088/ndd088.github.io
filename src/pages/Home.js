import React from 'react';
import '../assets/styles/App.css';
import { Link } from 'react-router-dom';
import homeAvatar from '../assets/images/me-round.png';
import homeBackground from '../assets/images/background.mp4';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="home">
      <video autoPlay loop muted className="home-video">
        <source src={homeBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-content">
        <img src={homeAvatar} alt="Avatar" className="home-avatar" />
        <h1 className="home-name">Nana Dzigua</h1>
        <h2 className="home-position">Front-End Developer.</h2>
        <p className="home-text">I code beautifully simple things, and I love what I do.  
        <React.Fragment><br/></React.Fragment>Please, don't be shy to hire me if you like my CV-app!</p>
        <Link to="/inner" className="home-button-text">
          <Button className="home-button" text="Know more" textClassName="home-button-text"/>
        </Link>
      </div>
    </div>
  );
};

export default Home;