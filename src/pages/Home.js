import React from 'react';
import '../assets/styles/App.css';
import { Link } from 'react-router-dom';
import homeAvatar from '../assets/images/user-avatar.png';
import homeBackground from '../assets/images/background.png';
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
        <h1 className="home-name">John Doe</h1>
        <h2 className="home-position">Programmer. Creative. Innovator</h2>
        <p className="home-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  
        <React.Fragment><br/></React.Fragment>ligula eget dolor. Aenean massa. Cum sociis natoque</p>
        <Link to="/inner">
          <Button className="home-button" text="Know more" textClassName="home-button-text"/>
        </Link>
      </div>
    </div>
  );
};

export default Home;