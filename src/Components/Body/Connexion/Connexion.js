import React from 'react';
import Header from '../../Navigation/Header/Header';
import './Connexion.css';

const Connexion = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="loginPanel center">
        <input
          id="loginCo"
          type="text"
          placeholder="Login"
          className="inputLog"
        />
        <label for="loginCo" className="labelLogin" />

        <input
          id="pwdCo"
          type="password"
          placeholder="Mot de passe"
          className="inputLog"
        />
        <label for="pwdCo" className="labelLogin" />
        <span>
          <a href="#" className="register">
            Mot de passe oublié ?
            </a>
        </span>

        <div className="btnDivLog">
          <input type="button" value="Connexion" className="inputLog btnLog" />
          <span>
            <a href="#" className="register">
              S'enregistrer?
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Connexion;
