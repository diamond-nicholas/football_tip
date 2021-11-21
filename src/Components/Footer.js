import React from 'react';
import('../Styles/Footer.css');

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li>leagues</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <a href='/home'>
          <h4>Payment Options</h4>
        </a>
        <p>RealfootballOdds.com © 2021. All Rights Reserved. </p>
      </footer>
    </>
  );
};

export default Footer;
