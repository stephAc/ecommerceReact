import React, { Component } from 'react';
import './CardProduitPanier.css';
import img from '../../../assets/img/backgroundHomePage/dawn-3793717_640.jpg';

export default class FicheProduit extends Component {
  state = {
    qteProd: 1,
  };

  handleQte = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="ficheProduitPanier">
        <img
          src={img}
          alt="Produit"
          height="50px"
          width="50px"
          style={{ marginRight: 15 }}
        />
        <div className="produitPanier">
          <p style={{ wordWrap: 'anywhere' }}>NameNameNameNameNameName</p>
          <p
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            Quantité :
            <input
              type="number"
              name="qteProd"
              step="1"
              min="0"
              max="100"
              value={this.state.qteProd}
              onChange={this.handleQte}
              className="inputPanier"
            />
          </p>
          <button className="btnStylePanier">Supprimer</button>
        </div>
      </div>
    );
  }
}
