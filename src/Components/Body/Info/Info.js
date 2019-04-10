import React, { Component } from 'react';
import './Info.css';
import avatarImg from '../../../assets/img/avatarUser.png';

export default class InFO extends Component {
  state = {
    enableInputBool: true,
    nom: 'nom',
    prenom: 'prenom',
    sexe: 'sexe',
    telephone: 'telephone',
    adresse: 'adresse',
    adresseFactu: 'adresseFactu',
    adresseLivraison: 'adresseLivraison',
  };

  enableInput = () => {
    this.setState(state => ({
      enableInputBool: !state.enableInputBool,
    }));
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const inputStyle =
      this.state.enableInputBool === true
        ? 'inputIsNotModified'
        : 'inputModified';

    const showHide = this.state.enableInputBool === true ? 'hide' : 'show';

    return (
      <div className="userInfoGrid">
        <div>
          <h1>Info</h1>
          <img src={avatarImg} alt="Avatar" width="250px" height="250px" />
          <button>Supprimer</button>
          <button onClick={this.enableInput}>Modifier</button>
        </div>
        <div className="displayForm">
          <label>
            Nom :
            <input
              className={inputStyle}
              type="text"
              name="nom"
              onChange={this.handleInput}
              value={this.state.nom}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Prénom :
            <input
              className={inputStyle}
              type="text"
              name="prenom"
              onChange={this.handleInput}
              value={this.state.prenom}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Sexe :
            <input
              className={inputStyle}
              type="text"
              name="sexe"
              onChange={this.handleInput}
              value={this.state.sexe}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Téléphone :
            <input
              className={inputStyle}
              id="inputTest"
              type="text"
              name="telephone"
              onChange={this.handleInput}
              value={this.state.telephone}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Adresse :
            <textarea
              className={inputStyle}
              type="text"
              name="adresse"
              onChange={this.handleInput}
              value={this.state.adresse}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Adresse de facturation :
            <textarea
              className={inputStyle}
              type="text"
              name="adresseFactu"
              onChange={this.handleInput}
              value={this.state.adresseFactu}
              disabled={this.state.enableInputBool}
            />
          </label>
          <label>
            Adresse de livraison :
            <textarea
              className={inputStyle}
              type="text"
              name="adresseLivraison"
              onChange={this.handleInput}
              value={this.state.adresseLivraison}
              disabled={this.state.enableInputBool}
            />
          </label>
          <div className={showHide}>
            <button>Sauvegarder</button>
            <button className="btnQuit">Annuler</button>
          </div>
        </div>
      </div>
    );
  }
}
