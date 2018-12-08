import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="homeGridDisplay">
        <button className="btnStyleHomePage" style={{ backgroundColor: 'red' }}>
          Santé
        </button>
        <button
          className="btnStyleHomePage"
          style={{ backgroundColor: 'blue' }}
        >
          Visage
        </button>
        <button
          className="btnStyleHomePage"
          style={{ backgroundColor: 'green' }}
        >
          Maternité
        </button>
        <button
          className="btnStyleHomePage"
          style={{ backgroundColor: 'brown' }}
        >
          Hygiène
        </button>
        <button
          className="btnStyleHomePage"
          style={{ backgroundColor: 'yellow' }}
        >
          Fitness
        </button>
        <button
          className="btnStyleHomePage"
          style={{ backgroundColor: 'orange' }}
        >
          Vétérinaire
        </button>
      </div>
    );
  }
}
