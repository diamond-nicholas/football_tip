import React from 'react';
import { Link } from 'react-router-dom';

import('../Styles/Nav.css');
const Nav = () => {
  return (
    <div className='main'>
      <nav className='nav'>
        <header className='left'>
          <Link to='/'> RealFootballTips</Link>
        </header>
        <header className='middle'>
          <ul>
            <li className='list-item'>Leagues</li>
            <li className='list-item'>Tips</li>
            <li className='list-item'>Weekend 10odds</li>
            <li className='list-item'>Faqs</li>
            <Link to='/contact'>Contact Us</Link>
          </ul>
        </header>
        <header className='right'>Welcome, user.name</header>
      </nav>
    </div>
  );
};

export default Nav;
