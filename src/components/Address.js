import React from 'react';
import '../assets/styles/App.css';
import phoneIcon from '../assets/images/clarity_phone-handset-solid.png';
import emailIcon from '../assets/images/icons.png';
import skypeIcon from '../assets/images/icons (3).png'

const Address = () => (
  <div className="address">
    <h2>Contacts</h2>
    <p>
      <img src={phoneIcon} alt="Phone Icon" />
      <a href="tel:+380664294967">Call me</a>
    </p>
    <p>
      <img src={emailIcon} alt="Email Icon" />
      <a href="mailto:nddzigua@icloud.com">Email me</a>
    </p>
    <p>
      <img src={skypeIcon} alt="Skype Icon" />
      <span className="skype"></span>
      <a href="skype:nanadzigua?call">Skype me</a>
    </p>
  </div>
);

export default Address;
