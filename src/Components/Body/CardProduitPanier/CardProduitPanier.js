import React, { Component } from 'react';
import './CardProduitPanier.css';
import img from '../../../assets/img/backgroundHomePage/dawn-3793717_640.jpg';
import Compteur from '../Compteur/Compteur';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../../actions';
class CardProduitPanier extends Component {
  state = {
    qte: this.props.article.articleQte,
  };

  addQte = () => {
    this.setState({ qte: this.state.qte + 1 });
  };

  diminueQte = () => {
    if (this.state.qte > 1) {
      this.setState({ qte: this.state.qte - 1 });
    }
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
              qte={this.state.qte}
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
  { deleteFromCart },
)(CardProduitPanier);
