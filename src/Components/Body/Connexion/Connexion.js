import React, { Component, Fragment } from 'react';
import Header from '../../Navigation/Header/Header';
import { Link } from 'react-router-dom';
import './Connexion.css';

export default class Connexion extends Component {
  state = {
    loginUser: '',
    pwdUser: '',
  };

  handleInput = event => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log('Sub');
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="loginPanel center">
          <input
            name="loginUser"
            type="text"
            placeholder="Login"
            className="inputLog inputLogStyle"
            onChange={this.handleInput}
          />
          <input
            name="pwdUser"
            type="password"
            placeholder="Mot de passe"
            className="inputLog inputLogStyle"
            onChange={this.handleInput}
          />
          <Link to={'/'}>
            <span className="spanMdpStyle">Mot de passe oublié ?</span>
          </Link>

          <div className="btnDivLog">
            <input
              type="button"
              value="Connexion"
              className="inputLog btnLog"
              onClick={this.handleSubmit}
            />
            <Link to={'/inscription'}>
              <span className="spanLogStyle">S'enregistrer?</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
