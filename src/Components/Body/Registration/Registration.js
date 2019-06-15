import React, { Component } from 'react';
import './Registration.css';
// import Address from '../../Body/Address/Address';
import Header from '../../Navigation/Header/Header';
import Footer from '../../Footer/Footer';

function Alert(props) {
  // const field = props.field;
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

      ligne1_civilite: '',
      ligne1_prenom: '',
      ligne1_nom: '',
      ligne4_numero: '',
      ligne4_voie: '',
      ligne6_cp: '',
      ligne6_ville: '',
      ligne7_pays: '',

      civilite_id: '',
      email: '',
      ligne1: 'null',
      ligne2: 'null',
      ligne4: 'null',
      ligne6: 'null',
      ligne7: 'null',
      nom: '',
      password: '',
      prenom: '',
      sexe_id: '',
      telephone: '',
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

    // if (value.length > this.state['length_' + target.name]) {
    // } else {
    //   this.setState({ [target.name]: target.value });
    // }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let ligne1 =
      this.state.ligne1_civilite +
      ' ' +
      this.state.ligne1_nom +
      ' ' +
      this.state.ligne1_prenom;
    let ligne4 = this.state.ligne4_numero + ' ' + this.state.ligne4_voie;
    let ligne6 = this.state.ligne6_ville + ' ' + this.state.ligne6_cp;
    let ligne7 = this.state.ligne7_pays;

    this.setState({ ligne1, ligne4, ligne6, ligne7 });

    let civilite;
    switch (this.state.civilite_id) {
      case 'Madame':
        civilite = 1;
        break;
      case 'Monsieur':
        civilite = 2;
        break;
      default:
        civilite = 3;
        break;
    }

    let sexe = this.state.sexe_id ? 1 : 0;

    let jsonFile = {
      email: this.state.email,
      nom: this.state.nom,
      prenom: this.state.prenom,
      telephone: this.state.telephone,
      sexe_id: sexe,
      password: this.state.password,
      civilite_id: civilite,
      ligne1: this.state.ligne1,
      ligne2: this.state.ligne2,
      ligne3: this.state.ligne3,
      ligne4: this.state.ligne4,
      ligne5: this.state.ligne5,
      ligne6: this.state.ligne6,
      ligne7: this.state.ligne7,
    };

    jsonFile = JSON.stringify(jsonFile);

    fetch('http://mercury.iut-orsay.fr:5000/client', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: jsonFile,
    })
      .then(result => result.json())
      .then(response => {
        console.log(response);
        // window.location.replace('http://localhost:3000/accueil');
      })
      .catch(err => {
        console.log('err : ', err);
      });
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
                    className="selectStyleReg"
                    value={this.state.civilite_id}
                    onChange={this.handleChange}
                  >
                    <option value="Madame">Madame</option>
                    <option value="Monsieur">Monsieur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="sexe_id">Sexe</label>

                  <select
                    id="sexe_id"
                    name="sexe_id"
                    className="selectStyleReg"
                    value={this.state.sexe_id}
                    onChange={this.handleChange}
                  >
                    <option value="Femme">Femme</option>
                    <option value="Homme">Homme</option>
                    <option value="Autre">Autre</option>
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

            <div className="container-1">
              <h2>
                <i className="fas fa-truck" /> Adresse de livraison
              </h2>

              <div className="item-1 container-2">
                {/**
                    ligne1 : [ligne1-civilite][ligne1-prenom][ligne1-nom]
                    ligne1 : [Civilité][Prénom][NOM]
                */}
                <div className="item-2 container-3 start">
                  <label className="" htmlFor="ligne1_civilite">
                    Civilité du destinataire
                  </label>
                  <select
                    id="ligne1_civilite"
                    name="ligne1_civilite"
                    className="selectStyleReg"
                    value={this.state.ligne1_civilite}
                    onChange={this.handleChange}
                  >
                    <option value="Madame">Madame</option>
                    <option value="Monsieur">Monsieur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="ligne1_prenom">Prénom du destinataire</label>
                  <input
                    id="ligne1_prenom"
                    name="ligne1_prenom"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne1_prenom}
                    placeholder="Tapez son prénom"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="item-2 container-3 end">
                  <label htmlFor="ligne1_nom">Nom du destinataire</label>
                  <input
                    id="ligne1_nom"
                    name="ligne1_nom"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne1_nom}
                    placeholder="Tapez son nom"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="item-1 container-2">
                {/**
           ligne4 : [ligne4-numero][ligne4-voie]
           ligne4 : [Numéro][Voie]
           */}
                <div className="item-2 container-3 start">
                  <label htmlFor="ligne4_numero">Numéro de voie</label>
                  <input
                    id="ligne4_numero"
                    name="ligne4_numero"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne4_numero}
                    placeholder="Tapez le numéro de la voie"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="item-2 container-3">
                  <label htmlFor="ligne4_voie">Libellé de la voie</label>
                  <input
                    id="ligne4_voie"
                    name="ligne4_voie"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne4_voie}
                    placeholder="Tapez le libellé de la voie"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="item-1 container-2">
                {/**
           code_postal: [code_postal]
           code_postal: [CODE POSTAL]
           */}
                <div className="item-2 container-3 start">
                  <label htmlFor="ligne6_cp">Code postal</label>
                  <input
                    id="ligne6_cp"
                    name="ligne6_cp"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne6_cp}
                    placeholder="Tapez le code postal"
                    onChange={this.handleChange}
                  />
                </div>

                {/**
           ligne6: [ligne6]
           ligne6: [VILLE]
           */}
                <div className="item-2 container-3">
                  <label htmlFor="ligne6_ville">Ville</label>
                  <input
                    id="ligne6_ville"
                    name="ligne6_ville"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne6_ville}
                    placeholder="Tapez le nom de la ville"
                    onChange={this.handleChange}
                  />
                </div>

                {/**
           ligne7: [ligne7]
           ligne7: [PAYS]
           */}
                <div className="item-2 container-3 end">
                  <label htmlFor="ligne7_pays">Pays</label>
                  <input
                    id="ligne7_pays"
                    name="ligne7_pays"
                    type="text"
                    className="inputStyle"
                    value={this.state.ligne7_pays}
                    placeholder="Tapez le nom du pays"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="container-1">
              <h2>
                <i className="fas fa-receipt" /> Adresse de facturation
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
                    className="selectStyleReg"
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

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
                className="submitInput"
                value="S'inscrire"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </main>
        <Footer />
      </article>
    );
  }
}
