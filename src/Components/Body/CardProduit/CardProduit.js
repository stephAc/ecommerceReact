import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CardProduit.css';
export default class FicheProduit extends Component {
  render() {
    return (
      <div className="ficheProduit">
        <div className="prodDetail">
          <p>{this.props.article.articlelibelle}</p>
          <p>{this.props.article.prix}€</p>
        </div>

        <div className="btnProduit">
          <Link
            to={{ pathname: '/detail', state: { article: this.props.article } }}
          >
            <button style={{ width: '100px' }}>Voir produit</button>
          </Link>
          <button style={{ width: '100px' }}>Ajouter</button>
        </div>
      </div>
    );
  }
}
