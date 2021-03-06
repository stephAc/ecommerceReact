import React, { Component, Fragment } from 'react';
import Header from '../../Navigation/Header/Header';
import { Link } from 'react-router-dom';
import './Connexion.css';
import { connect } from 'react-redux';
import { userLogIn } from '../../../actions/user_action';
import Banniere from '../Banniere/Banniere';

class Connexion extends Component {
  state = {
    loginUser: '',
    pwdUser: '',
    wrong: false,
  };

  handleInput = event => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let jsonFile = {
      email: this.state.loginUser,
      password: this.state.pwdUser,
    };

    jsonFile = JSON.stringify(jsonFile);

    fetch('http://mercury.iut-orsay.fr:5000/client/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: jsonFile,
    })
      .then(result => result.json())
      .then(connexion => {
        if (connexion.client_id) {
          this.props.userLogIn(connexion.client_id);
          this.setState({ wrong: false });
          window.location.replace('http://localhost:3000/accueil');
        } else {
          this.setState({ wrong: true });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const classWrong = this.state.wrong ? 'wrongLog' : '';
    const hideShow = this.state.wrong ? 'block' : 'none';
    return (
      <Fragment>
        <Header />
        <div style={{ overflow: 'hidden' }}>
          <Banniere
            message="Email ou mot de passe incorrect"
            color="red"
            hideShow={hideShow}
          />

          <div className="loginPanel center">
            <input
              name="loginUser"
              type="text"
              placeholder="Email"
              className={`${classWrong} inputLog inputLogStyle`}
              onChange={this.handleInput}
            />
            <input
              name="pwdUser"
              type="password"
              placeholder="Mot de passe"
              className={`${classWrong} inputLog inputLogStyle`}
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
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return state;
};

export default connect(
  mapStateToProps,
  { userLogIn },
)(Connexion);
