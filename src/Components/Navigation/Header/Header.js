import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header className="headerStyle">
    <Link to="/accueil">
      <span>Mercury</span>
    </Link>
  </header>
);
