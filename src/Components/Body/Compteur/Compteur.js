import React, { Component } from 'react';
import './Compteur.css';

export default class Compteur extends Component {
  render() {
    return (
      <div className="compteurDisplay">
        <button onClick={this.props.add} className="compteurBtn">
          <i className="fas fa-plus-circle" />
        </button>
        <span>{this.props.qte}</span>
        <button onClick={this.props.diminue} className="compteurBtn">
          <i className="fas fa-minus-circle" />
        </button>
      </div>
    );
  }
}
