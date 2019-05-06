import React, { Component } from 'react';
import './Info.css';
import avatarImg from '../../../assets/img/avatarUser.png';
import Header from '../../Navigation/Header/Header';

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
        ? ['inputIsNotModified', 'hide']
        : ['inputModified', 'show'];

    return (
      <React.Fragment>
        <Header />
        <div className="userInfoGrid">
          <div className="infoAvatar">
            <h1>Info</h1>
            <img src={avatarImg} alt="Avatar" width="200px" height="200px" />
            <button style={{ marginTop: 50 }}>Supprimer</button>
            <button onClick={this.enableInput}>Modifier</button>
          </div>

          <div className="displayForm">
            <label>
              Nom :
              <br />
              <input
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="nom"
                onChange={this.handleInput}
                value={this.state.nom}
                disabled={this.state.enableInputBool}
              />
            </label>
            <label>
              Prénom :
              <br />
              <input
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="prenom"
                onChange={this.handleInput}
                value={this.state.prenom}
                disabled={this.state.enableInputBool}
              />
            </label>
            <label>
              Sexe :
              <br />
              <input
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="sexe"
                onChange={this.handleInput}
                value={this.state.sexe}
                disabled={this.state.enableInputBool}
              />
            </label>
            <label>
              Téléphone :
              <br />
              <input
                className={inputStyle[0] + ' marginInput '}
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
              <br />
              <textarea
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="adresse"
                onChange={this.handleInput}
                value={this.state.adresse}
                disabled={this.state.enableInputBool}
              />
            </label>
            <label>
              Adresse de facturation :
              <br />
              <textarea
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="adresseFactu"
                onChange={this.handleInput}
                value={this.state.adresseFactu}
                disabled={this.state.enableInputBool}
              />
            </label>
            <label>
              Adresse de livraison :
              <br />
              <textarea
                className={inputStyle[0] + ' marginInput '}
                type="text"
                name="adresseLivraison"
                onChange={this.handleInput}
                value={this.state.adresseLivraison}
                disabled={this.state.enableInputBool}
              />
            </label>
            <div className={inputStyle[1] + ' btnCenter '}>
              <button>Sauvegarder</button>
              <button className="btnQuit" onClick={this.enableInput}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
