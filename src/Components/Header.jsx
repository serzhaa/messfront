import React from 'react';
import Head from './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="#" className="logo">
            <img src="images/logo.png" alt="Cricket" className="logo__item" />
          </a>
          <input type="text" className="search-input search-input-margin" />
          <div className="login-user">
            <span className="login-user__text">Vyacheslav</span>
            <img src="images/small_user.jpg" alt="User's image" className="login-user__img" />
            <div className="login-user__settings">
              <img src="images/three_dots.svg" alt="Settings" className="login-user__settings__item" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;