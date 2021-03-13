//vendors
import React, { useState } from 'react';

//styles
import './header.scss';

//assets
import logo from '../../assets/img/hn-logo.png';
import searchNew from '../../assets/img/search-new.png';
import { ReactComponent as MoonIcon } from '../../assets/img/moon-icon.svg';
import { ReactComponent as SunIcon } from '../../assets/img/sun-icon.svg';

export const Header = () => {
  const [activeIcon, setActiveIcon] = useState('sun');

  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Hackernoon Logo" className="header__logo" />
      </a>
      <form className="header search-form">
        <input name="searchValue" placeholder="Search..." type="text" />
        <img src={searchNew} alt="Search Icon" width="19" height="19" />
      </form>
      <div className="header__auth-buttons">
        <a href="https://app.hackernoon.com/news" className="button">
          Start Writing
        </a>
        <a className="button--transparent">Log In</a>
      </div>
      <button
        onClick={() => setActiveIcon(activeIcon === 'sun' ? 'moon' : 'sun')}
        className="header__toggle-night-mode"
      >
        {activeIcon === 'sun' ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;
