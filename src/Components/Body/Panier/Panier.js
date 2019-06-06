import React, { Component, Fragment } from 'react';
import CardProduitPanier from '../CardProduitPanier/CardProduitPanier';
import Header from '../../Navigation/Header/Header';
import './Panier.css';
import Footer from '../../Footer/Footer';
import { connect } from 'react-redux';

class Panier extends Component {
  handleCommande = () => {
    console.log('commande');
  };

  renderCartList() {
    if (!!this.props.shoppingCart.length) {
      return this.props.shoppingCart.map((objet, key) => {
        return <CardProduitPanier key={key} article={objet} />;
      });
    } else {
      return <div style={{ textAlign: 'center' }}>Aucun articles trouvé</div>;
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
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
  return { shoppingCart: state.shoppingCart.shoppingCart };
};

export default connect(mapStateToProps)(Panier);
