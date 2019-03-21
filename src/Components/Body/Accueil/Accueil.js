import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';
import Footer from '../../Footer/Footer';
export default class Accueil extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="searchAcc">
          <button>Catégories</button>
          <button>Search</button>
        </div>
        <div>
          <h1 style={{ marginLeft: 10 }}>Produits</h1>
          <ListeProduit />
        </div>
      </Fragment>
    );
  }
}
