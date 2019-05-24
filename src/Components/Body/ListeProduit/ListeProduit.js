import React, { Component } from 'react';
import CardProduit from '../CardProduit/CardProduit';
import './ListeProduit.css';

export default class ListeProduit extends Component {
  render() {
    return (
      <div className="listProd">
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
        <CardProduit />
      </div>
    );
  }
}
