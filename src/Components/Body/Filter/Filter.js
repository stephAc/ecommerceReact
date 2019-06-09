import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="filtre">
        <select
          className="selectAcc"
          value={this.props.categorie}
          onChange={this.props.handleSelect}
        >
          <option value="Catégories">Catégories</option>
          <option value="Produits de vie">Produits de vie</option>
          <option value="Produits de santé">Produits de santé</option>
        </select>
        <button onClick={this.props.cateSearch}>Search</button>
      </div>
    );
  }
}
