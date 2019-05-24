import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';
// import axios from 'axios';

export default class Accueil extends Component {
  state = {
    selectCategorie: 'Catégories',
  };

  componentDidMount() {
    console.log('avant axios');
    // axios
    //   .get('http://mercury.iut-orsay.fr:5000/article')
    //   .then(res => {
    //     console.log('aprrès axios');
    //     console.log('res : ' + res);
    //     console.log('res data : ' + res.data);
    //   })
    //   .catch(error => {
    //     if (error.response) {
    //       console.log(error.response.headers);
    //     } else if (error.request) {
    //       console.log(error.request);
    //     } else {
    //       console.log(error.message);
    //     }
    //     console.log(error.config);
    //   });

    // {
    //   mode: 'no-cors',
    //     headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     Accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //   },
    // }

    fetch('http://mercury.iut-orsay.fr:5000/article')
      .then(result => result.json())
      .then(result => {
        console.log(result); //test data,
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
          <ListeProduit />
        </div>
      </Fragment>
    );
  }
}
