import React, { Component } from 'react';
import './Registration.css';
import Address from '../../Body/Address/Address';
import Header from '../../Navigation/Header/Header';
import Footer from '../../Footer/Footer';

function Alert(props) {
  const field = props.field;
  const hidden = props.hidden;
  const length = props.length;
  const type = props.type;

  switch (type) {
    case 'length':
      return <LengthAlert hidden={hidden} length={length} />;
    default:
      return <div />;
  }
}

function LengthAlert(props) {
  return (
    <div className="alert alert-danger" hidden={props.hidden}>
      Le nombre de caractères est limité à {props.length} caractères !
    </div>
  );
}

/**
 * https://fr.reactjs.org/docs/forms.html#handling-multiple-inputs
 */
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: {
        email: '',
        password: '',
        text: '',
      },
      length_civilite_id: 50,
      length_email: 50,
      length_ligne1: 300,
      length_ligne2: 300,
      length_ligne4: 300,
      length_ligne6: 300,
      length_ligne7: 300,
      length_nom: 50,
      length_password: 300,
      length_prenom: 50,
      length_sexe_id: 50,
      length_telephone: 20,
      civilite_id: null,
      email: null,
      ligne1: null,
      ligne2: null,
      ligne4: null,
      ligne6: null,
      ligne7: null,
      nom: null,
      password: null,
      prenom: null,
      sexe_id: null,
      telephone: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const type = target.type;
    const state = this.state;

    switch (type) {
      case 'email':
        if (!value.match(state.pattern.email)) {
        }
        break;
      case 'password':
        if (!value.match(state.pattern.password)) {
        }
        break;
      case 'tel':
        if (!value.match(state.pattern.tel)) {
        }
        break;
      default:
        break;
    }

    if (value.length > this.state['length_' + target.name]) {
    } else {
      this.setState({ [target.name]: target.value });
    }
  };

  render() {
    return (
      <article>
        <Header />
        <main>
          <Alert
            field={this.state.fieldForAlert}
            hidden={this.state.isAlertHidden}
            length={this.state.lengthForAlert}
            type={this.state.typeForAlert}
          />

          <form className="">
            <div className="container-1">
              <h2>
                <i className="fas fa-user" /> Identité
              </h2>

              <div className="item-1 container-2">
                <div className="item-2 container-3 start">
                  <label htmlFor="civilite_id">Civilité</label>

                  <select
                    id="civilite_id"
                    name="civilite_id"
                    className="selectStyle"
                    onChange={this.handleChange}
                  >
                    <option value="">Madame</option>
                    <option value="">Monsieur</option>
                    <option value="">Autre</option>
                  </select>
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="sexe_id">Sexe</label>

                  <select
                    id="sexe_id"
                    name="sexe_id"
                    className="selectStyle"
                    onChange={this.handleChange}
                  >
                    <option value="">Femme</option>
                    <option value="">Homme</option>
                    <option value="">Autre</option>
                  </select>
                </div>
              </div>

              <div className="item-1 container-2">
                <div className="item-2 container-3 start">
                  <label htmlFor="nom">Nom</label>

                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    className="inputStyle"
                    placeholder="Tapez votre nom"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="prenom">Prénom</label>

                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    className="inputStyle"
                    placeholder="Tapez votre prénom"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="container-1">
              <h2>
                <i className="fas fa-address-book" /> Contact
              </h2>

              <div className="item-1 container-2">
                <div className="item-2 container-3 start">
                  <label htmlFor="telephone">Numéro de téléphone</label>

                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    className="inputStyle"
                    placeholder="Tapez votre numéro de téléphone"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="email">Adresse e-mail</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="inputStyle"
                    placeholder="Tapez votre adresse e-mail"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <Address heading="Adresse de livraison" icon="fas fa-truck" />

            <Address heading="Adresse de facturation" icon="fas fa-receipt" />

            <div className="container-1">
              <h2>
                <i className="fas fa-lock" /> Sécurité
              </h2>

              <div className="item-1 container-2">
                <div className="item-2 container-3 start">
                  <label htmlFor="password">Mot de passe</label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="inputStyle"
                    placeholder="Tapez votre mot de passe"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="password-re">Confirmation</label>

                  <input
                    id="password-re"
                    name="password"
                    type="password"
                    className="inputStyle"
                    placeholder="Confirmez votre mot de passe"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-end">
              <input
                type="submit"
                className="inputSubmit inputStyle"
                value="S'inscrire"
              />
            </div>
          </form>
        </main>
        <Footer />
      </article>
    );
  }
}
