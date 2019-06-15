import React, { Component } from 'react';
import './Address.css';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: props.heading,
      icon: props.icon,
    };
  }

  render() {
    return (
      <div className="container-1">
        <h2>
          <i className={this.state.icon} /> {this.state.heading}
        </h2>

        <div className="item-1 container-2">
          {/**
           ligne1 : [ligne1-civilite][ligne1-prenom][ligne1-nom]
           ligne1 : [Civilité][Prénom][NOM]
           */}
          <div className="item-2 container-3 start">
            <label className="" htmlFor="ligne1-civilite">
              Civilité du destinataire
            </label>
            <select
              id="ligne1-civilite"
              name="ligne1"
              className="selectStyle"
              onChange={this.handleInputChange}
            >
              <option value="">Madame</option>
              <option value="">Monsieur</option>
              <option value="">Autre</option>
            </select>
          </div>

          <div className="item-2 container-3">
            <label htmlFor="ligne1-prenom">Prénom du destinataire</label>
            <input
              id="ligne1-prenom"
              name="ligne1"
              type="text"
              className="inputStyle"
              placeholder="Tapez son prénom"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="item-2 container-3 end">
            <label htmlFor="ligne1-nom">Nom du destinataire</label>
            <input
              id="ligne1-nom"
              name="ligne1"
              type="text"
              className="inputStyle"
              placeholder="Tapez son nom"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="item-1 container-2">
          {/**
           ligne4 : [ligne4-numero][ligne4-voie]
           ligne4 : [Numéro][Voie]
           */}
          <div className="item-2 container-3 start">
            <label htmlFor="ligne4-numero">Numéro de voie</label>
            <input
              id="ligne4-numero"
              name="ligne4"
              type="text"
              className="inputStyle"
              placeholder="Tapez le numéro de la voie"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="item-2 container-3">
            <label htmlFor="ligne4-voie">Libellé de la voie</label>
            <input
              id="ligne4-voie"
              name="ligne4"
              type="text"
              className="inputStyle"
              placeholder="Tapez le libellé de la voie"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="item-1 container-2">
          {/**
           code_postal: [code_postal]
           code_postal: [CODE POSTAL]
           */}
          <div className="item-2 container-3 start">
            <label htmlFor="code_postal">Code postal</label>
            <input
              id="code_postal"
              name="code_postal"
              type="text"
              className="inputStyle"
              placeholder="Tapez le code postal"
              onChange={this.handleInputChange}
            />
          </div>

          {/**
           ligne6: [ligne6]
           ligne6: [VILLE]
           */}
          <div className="item-2 container-3">
            <label htmlFor="ligne6">Ville</label>
            <input
              id="ligne6"
              name="ligne6"
              type="text"
              className="inputStyle"
              placeholder="Tapez le nom de la ville"
              onChange={this.handleInputChange}
            />
          </div>

          {/**
           ligne7: [ligne7]
           ligne7: [PAYS]
           */}
          <div className="item-2 container-3 end">
            <label htmlFor="ligne7">Pays</label>
            <input
              id="ligne7"
              name="ligne7"
              type="text"
              className="inputStyle"
              placeholder="Tapez le nom du pays"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
