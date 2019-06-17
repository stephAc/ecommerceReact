import React, { Component, Fragment } from 'react';
import CardProduitPanier from '../CardProduitPanier/CardProduitPanier';
import Header from '../../Navigation/Header/Header';
import './Panier.css';
import { connect } from 'react-redux';
import { clearCart } from '../../../actions/panier_action';
import PopupMsg from '../PopupMsg/PopupMsg';

class Panier extends Component {
  state = {
    popupShow: false,
    title: '',
    message: '',
  };

  handleCommande = () => {
    if (this.props.shoppingCart.length === 0) {
      this.setState({
        popupShow: true,
        title: 'fas fa-exclamation-triangle',
        message: 'Votre panier est vide',
      });
    } else {
      if (!this.props.userLog) {
        this.setState({
          popupShow: true,
          title: 'fas fa-user-times',
          message: 'Veuillez vous connecter pour commander',
        });
      } else {
        fetch(`http://mercury.iut-orsay.fr:5000/client/${this.props.userId}`)
          .then(result => result.json())
          .then(user => {
            console.log(user);
            this.setState({
              popupShow: true,
              title: 'fas fa-truck',
              message: 'Votre commande à bien été pris en compte',
            });
            this.props.clearCart();
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };

  renderCartList() {
    if (!!this.props.shoppingCart.length) {
      return this.props.shoppingCart.map((objet, key) => {
        return <CardProduitPanier key={key} article={objet} />;
      });
    } else {
      return <div style={{ textAlign: 'center' }}>Aucun articles</div>;
    }
  }

  showPopupFunc = () => {
    this.setState({ popupShow: false });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PopupMsg
          showPopup={this.state.popupShow}
          hide={this.showPopupFunc}
          title={this.state.title}
          message={this.state.message}
        />
        <h1 style={{ marginLeft: 10, marginTop: 60 }}>Mon Panier</h1>
        <div className="gridCommande">
          <div className="flexCommandeInfo">
            <p>Total commande : </p>
            <button
              onClick={this.handleCommande}
              style={{ alignSelf: 'center' }}
            >
              Commander
            </button>
          </div>

          <div className="flexCommande">{this.renderCartList()}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('shoppingCart:', state.panier.shoppingCart);

  return {
    shoppingCart: state.panier.shoppingCart,
    userLog: state.user.userLog,
    userId: state.user.userId,
  };
};

export default connect(
  mapStateToProps,
  { clearCart },
)(Panier);
