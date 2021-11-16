import React from 'react';

import { Link } from 'react-router-dom';

import './scss/header.scss';

const Header = (): JSX.Element => {
  return <div id="topHeader">
    <div>
      <h1>BSW<br />Interests</h1>
    </div>
    <div>
      <nav>
        <Link to="/">Home</Link><Link to="/about">About</Link>
        <Link to="/games">Games</Link><Link to="/login">Login</Link>
      </nav>
    </div>
  </div>;
};

export default Header;
