import React from 'react';
import '../assets/styles/App.css';
import { Link } from 'react-router-dom';
import homeAvatar from '../assets/images/me-round.png';
import homeBackground from '../assets/images/background.jpg';
import Button from '../components/Button';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homeBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <div className="home" style={backgroundStyle}>
      <div className="home-content">
        <img src={homeAvatar} alt="Avatar" className="home-avatar" />
        <h1 className="home-name">Nana Dzigua</h1>
        <h2 className="home-position">Front-End Developer. Musician. CrossFitter. Car lover.</h2>
        <p className="home-text">Hi, this is my first CV and I hope you'll enjoy it.  
        <React.Fragment><br/></React.Fragment>You are welcome to know more. Please, don't be shy to hire me if you like my app!</p>
        <Link to="/inner">
          <Button className="home-button" text="Know more" textClassName="home-button-text"/>
        </Link>
      </div>
    </div>
  );
};

export default Home;