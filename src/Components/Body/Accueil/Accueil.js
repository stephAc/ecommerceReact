import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';
import Footer from '../../Footer/Footer';
export default class Accueil extends Component {
  state = {
    selectCategorie: 'Catégories',
  };

  handleSelect = event => {
    this.setState({ selectCategorie: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="searchAcc">
          <select
            className="selectAcc"
            value={this.state.selectCategorie}
            onChange={this.handleSelect}
          >
            <option value="Catégories">Catégories</option>
            <option value="Produits de vie">Produits de vie</option>
            <option value="Produits de santé">Produits de santé</option>
          </select>
          <button>Search</button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <h1 style={{ marginLeft: 10 }}>Produits</h1>
          <ListeProduit />
        </div>
      </Fragment>
    );
  }
}
