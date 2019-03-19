import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
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
              Commandez que le site et faites vous livrer chez vous.
            </p>
            <div>
              <button>Se connecter</button>
              <Link to="/accueil">
                <button>Poursuivre sans compte </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="homePage">
        <p>Bienvenue sur le site de vente en ligne de Gerion Health</p>
        <br />
        <p>
          Ici vous trouverez toutes nos gammes de produits de soin ainsi qu'une
          sélection d'articles quotidiens à prix très étudiés. Commandez que le
          site et faites vous livrer chez vous.
        </p>
        <div>
          <button>Se connecter</button>
          <Link to="/accueil">
            <button>Poursuivre sans compte </button>
          </Link>
        </div>
      </div> */
}
