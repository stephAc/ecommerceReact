import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CardProduit.css';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';
class CardProduit extends Component {
  render() {
    return (
      <div className="ficheProduit">
        <div className="prodDetail">
          <p>{this.props.article.articlelibelle}</p>
          <p>{this.props.article.prix}€</p>
        </div>

        <div className="btnProduit">
          <Link
            to={{ pathname: '/detail', state: { article: this.props.article } }}
          >
            <button style={{ width: '100px' }}>Voir produit</button>
          </Link>
          <button
            style={{ width: '100px' }}
            onClick={() => {
              this.props.addToCart(this.props.article, 1);
            }}
          >
            Ajouter
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
  { addToCart },
)(CardProduit);
