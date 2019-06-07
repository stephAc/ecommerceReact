import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/img/logo.jpg';
import LogBtn from '../ConnectedBtn/ConnectedBtn';

export default () => (
  <header className="headerStyle flexDisplayNav">
    <Link to="/accueil">
      <img alt="logo" src={logoImg} style={{ height: 50 }} />
    </Link>

    <div className="flexDisplayNav">
      <Link to="/connexion">
        <button className="navBtn">Se connecter</button>
      </Link>
      <LogBtn />
      <Link to="/panier">
        <button className="navBtn">
          Panier <i className="fas fa-cart-arrow-down" />
        </button>
      </Link>
    </div>
  </header>
);
