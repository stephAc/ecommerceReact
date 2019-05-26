import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';

export default class Accueil extends Component {
  state = {
    selectCategorie: 'Catégories',
    articles: [],
  };

  componentDidMount() {
    fetch('http://mercury.iut-orsay.fr:5000/article')
      .then(result => result.json())
      .then(articles => {
        this.setState(
          () => ({ articles }),
          // () => console.log('articles : ', this.state.articles),
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

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
          <ListeProduit articles={this.state.articles} />
        </div>
      </Fragment>
    );
  }
}
