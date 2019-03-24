import React, { Component, Fragment } from 'react';
import CardProduitPanier from '../CardProduitPanier/CardProduitPanier';
import Header from '../../Navigation/Header/Header';
import './Panier.css';
import Footer from '../../Footer/Footer';

export default class Panier extends Component {
  handleCommande = () => {
    console.log('commande');
  };

  render() {
    return (
      <Fragment>
        <Header />
        <h1 style={{ marginLeft: 10, marginTop: 60 }}>Mon Panier</h1>
        <div className="gridCommande">
          <div className="flexCommandeInfo">
            <p>Total commande : </p>
            <button
              onClick={this.handleCommande}
              style={{ alignSelf: 'center' }}
            >
              Commander
            </button>
          </div>
          <div className="flexCommande">
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
            <CardProduitPanier />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
