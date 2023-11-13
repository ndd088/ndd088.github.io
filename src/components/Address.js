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
      <a href="tel:+1234567890">123-456-7890</a>
    </p>
    <p>
      <img src={emailIcon} alt="Email Icon" />
      <a href="mailto:john.doe@example.com">john.doe@example.com</a>
    </p>
    <p>
      <img src={skypeIcon} alt="Skype Icon" />
      <span className="skype">Skype: </span>
      <a href="skype:john.doe?call">john.doe</a>
    </p>
  </div>
);

export default Address;
