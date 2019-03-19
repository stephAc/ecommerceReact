import React, { Component } from 'react';
import './CardProduit.css';

export default class FicheProduit extends Component {
  render() {
    return (
      <div className="ficheProduit">
        <div className="prodDetail">
          <p>Name</p>
          <p>prix</p>
        </div>

        <div className="btnProduit">
          <button>Voir produit</button>
          <button>Ajouter</button>
        </div>
      </div>
    );
  }
}
