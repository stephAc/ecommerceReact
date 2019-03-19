import React, { Component } from 'react';
import './Accueil.css';
import FicheProduit from '../FicheProduit/FicheProduit';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <div className="searchAcc">
          <button>Catégories</button>
          <button>Search</button>
        </div>
        <div className="listProd">
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
          <FicheProduit />
        </div>
      </div>
    );
  }
}
