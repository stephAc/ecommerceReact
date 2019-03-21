import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageContent center">
        <div className="center">
          <h1>Mercury</h1>
          <p>Bienvenue sur le site de vente en ligne de Gerion Health</p>
          <p>
            Ici vous trouverez toutes nos gammes de produits de soin ainsi
            qu'une sélection d'articles quotidiens à prix très étudiés.
            <br />
            Commandez sur le site et faites vous livrer chez vous.
          </p>
          <div>
            <Link to="/connexion">
              <button className="btnHome">Se connecter</button>
            </Link>
            <Link to="/accueil">
              <button className="btnHome">Poursuivre sans compte </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
