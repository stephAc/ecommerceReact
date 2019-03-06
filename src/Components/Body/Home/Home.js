import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <p>Bienvenue sur le site de vente en ligne de Gerion Health</p>
        <br />
        <p>
          Ici vous trouverez toutes nos gammes de produits de soin ainsi qu'une
          sélection d'articles quotidiens à prix très étudiés. Commandez que le
          site et faites vous livrer chez vous.
        </p>
        <div>
          <button>Se connecter</button>
          <button>Poursuivre sans compte </button>
        </div>
      </div>
    );
  }
}
