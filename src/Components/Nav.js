import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className='nav'>
        <header className='left'>
          {/* <img src='' alt='' /> */}
          RealFootballTips
        </header>
        <header className='right'>
          <ul>
            <li className='list-item'>Leagues</li>
            <li className='list-item'>Tips</li>
            <li className='list-item'>Faqs</li>
            <li className='list-item'>Contact Us</li>
            <li className='list-item'>Welcome, User.name</li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Nav;
