import React, { Component } from 'react';
import './Info.css';
import avatarImg from '../../../assets/img/avatarUser.png';
import Header from '../../Navigation/Header/Header';
import { connect } from 'react-redux';
import PopupMsg from '../PopupMsg/PopupMsg';
class Info extends Component {
  state = {
    enableInputBool: true,
    nom: '',
    prenom: '',
    sexe: '',
    telephone: '',
    adresse: '',
    adresseFactu: '',
    adresseLivraison: '',
    popupShow: false,
  };

  componentDidMount() {
    console.log(this.props.userId);
    if (this.props.userId) {
      fetch(`http://mercury.iut-orsay.fr:5000/client/${this.props.userId}`)
        .then(result => result.json())
        .then(user => {
          console.log(user);

          let sexe;
          switch (user.sexe_id) {
            case '0':
              sexe = 'Autre';
              break;
            case '1':
              sexe = 'Homme';
              break;
            default:
              sexe = 'Femme';
          }

          let adresse =
            user.ligne1 +
            ' ' +
            user.ligne2 +
            ' ' +
            user.ligne3 +
            ' ' +
            user.ligne4 +
            ' ' +
            user.ligne5 +
            ' ' +
            user.ligne6 +
            ' ' +
            user.ligne7;

          console.log(adresse);

          this.setState({
            nom: user.nom,
            prenom: user.prenom,
            sexe: sexe,
            telephone: user.telephone,
            addresse: adresse,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

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
  showPopupFunc = () => {
    this.setState({ popupShow: false });
  };

  handleSuppr = () => {
    this.setState({ popupShow: true });
  };

  confirmedSuppr = () => {
    fetch('http://mercury.iut-orsay.fr:5000/client/login', {
      method: 'DELETE',
    })
      .then(userDelete => {
        console.log(userDelete);
      })
      .catch(err => {
        console.log(err);
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
        <PopupMsg
          showPopup={this.state.popupShow}
          hide={this.showPopupFunc}
          title="far fa-trash-alt"
          message="Êtes-vous sur de vouloir supprimer votre compte ?"
        >
          <div style={{ display: 'flex', marginTop: 15 }}>
            <button style={{ color: 'red' }}>Annuler</button>
            <button onClick={this.confirmedSuppr}>Confirmer</button>
          </div>
        </PopupMsg>
        <div className="userInfoGrid">
          <div className="infoAvatar">
            <h1>Info</h1>
            <img src={avatarImg} alt="Avatar" width="200px" height="200px" />
            <button style={{ marginTop: 50 }} onClick={this.handleSuppr}>
              Supprimer
            </button>
            <button onClick={this.enableInput}>Modifier</button>
          </div>

          <div>
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
            </div>

            <div className={inputStyle[1] + ' btnCenter '}>
              <button onClick={this.enableInput}>Sauvegarder</button>
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

const mapStateToProps = state => {
  return { userId: state.user.userId };
};

export default connect(mapStateToProps)(Info);
