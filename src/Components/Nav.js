import React from 'react';
import('../Styles/Nav.css');
const Nav = () => {
  return (
    <div className='main'>
      <nav className='nav'>
        <header className='left'>
          {/* <img src='' alt='' /> */}
          RealFootballTips
        </header>
        <header className='middle'>
          <ul>
            <li className='list-item'>Leagues</li>
            <li className='list-item'>Tips</li>
            <li className='list-item'>Weekend 10odds</li>
            <li className='list-item'>Faqs</li>
            <li className='list-item'>Contact Us</li>
          </ul>
        </header>
        <header className='right'>Welcome, user.name</header>
      </nav>
    </div>
  );
};

export default Nav;
