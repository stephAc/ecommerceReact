import React, { Component } from 'react';
import './Analyse.css';

export default class Analyse extends Component {
  state = {
    dateJour: new Date(),
    dateDebut: new Date(),
    dateFin: new Date(),
  };

  componentWillMount = () => {
    const date = new Date();
    const month =
      date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    let dateJour = date.getFullYear() + '-' + month + '-' + day;
    this.setState({
      dateJour: dateJour,
      dateDebut: dateJour,
      dateFin: dateJour,
      grouper: '',
      selectCate: 'Produits de vie',
      selectProd: '',
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="deb">
          Début :
          <br />
          <input
            type="date"
            id="deb"
            name="dateDebut"
            value={this.state.dateDebut}
            min="2018-01-01"
            max={this.state.dateJour}
            onChange={this.handleInput}
          />
        </label>

        <br />

        <label htmlFor="fin">
          Fin :
          <br />
          <input
            type="date"
            id="fin"
            name="dateFin"
            value={this.state.dateFin}
            min="2018-01-01"
            max={this.state.dateJour}
            onChange={this.handleInput}
          />
        </label>

        <br />

        <label htmlFor="produit">
          Produit :
          <br />
          <select
            id="produit"
            name="selectProd"
            value={this.state.selectProd}
            onChange={this.handleInput}
          />
        </label>

        <br />

        <label htmlFor="categorie">
          Secteur :
          <br />
          <select
            id="categorie"
            name="selectCate"
            value={this.state.selectCate}
            onChange={this.handleInput}
          >
            <option value="Produits de santé">Produits de santé</option>
            <option value="Produits de vie">Produits de vie</option>
          </select>
        </label>

        <br />

        <div>
          <input
            type="radio"
            value="mois"
            defaultChecked
            name="grouper"
            onChange={this.handleInput}
          />{' '}
          Mois
          <input
            type="radio"
            value="semaine"
            name="grouper"
            onChange={this.handleInput}
          />{' '}
          Semaine
        </div>
      </div>
    );
  }
}
