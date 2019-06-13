import React, { Component } from 'react';
import './CardProduitPanier.css';
import img from '../../../assets/img/imgNotFound.png';
import Compteur from '../Compteur/Compteur';
import { connect } from 'react-redux';
import {
  deleteFromCart,
  addQteArticle,
  diminueQteArticle,
} from '../../../actions';
class CardProduitPanier extends Component {
  state = {};

  addQte = () => {
    this.props.addQteArticle(this.props.article.article);
  };

  diminueQte = () => {
    if (this.props.article.articleQte > 1) {
      this.props.diminueQteArticle(this.props.article.article);
    }
  };

  calcTotal = () => {
    return (
      this.props.article.articleQte * this.props.article.article.prix
    ).toFixed(2);
  };

  render() {
    return (
      <div className="ficheProduitPanier">
        <img
          src={img}
          alt="Produit"
          height="50px"
          width="50px"
          style={{ marginRight: 15 }}
        />
        <div className="produitPanier">
          <p style={{ wordWrap: 'anywhere' }}>
            {this.props.article.article.articlelibelle}
          </p>
          <p>Prix : {this.props.article.article.prix}€/u</p>
          <p>Total : {this.calcTotal()}€</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <p>Quantité :</p>
            <Compteur
              qte={this.props.article.articleQte}
              add={this.addQte}
              diminue={this.diminueQte}
            />
          </div>
          <button
            className="btnStylePanier"
            onClick={() => {
              this.props.deleteFromCart(this.props.article.article);
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { shoppingCart: state.shoppingCart };
};

export default connect(
  mapStateToProps,
  { deleteFromCart, addQteArticle, diminueQteArticle },
)(CardProduitPanier);
