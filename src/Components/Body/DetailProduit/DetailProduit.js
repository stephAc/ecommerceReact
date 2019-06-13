import React, { Component, Fragment } from 'react';
import './DetailProduit.css';
import Header from '../../Navigation/Header/Header';
import img from '../../../assets/img/imgNotFound.png';
import Comment from '../Comment/Comment';
import Compteur from '../Compteur/Compteur';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';
import PopupMsg from '../PopupMsg/PopupMsg';
class DetailProduit extends Component {
  state = {
    qte: 1,
    article: {},
    com: [],
    showPopup: false,
  };

  componentDidMount() {
    const { article } = this.props.location.state;
    this.setState(() => ({ article }));
  }

  addQte = () => {
    this.setState({ qte: this.state.qte + 1 });
  };

  diminueQte = () => {
    if (this.state.qte > 1) {
      this.setState({ qte: this.state.qte - 1 });
    }
  };

  showPopupFunc = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="gridDetail">
          <div className="detailFlex" id="itemDetailOne">
            <h2>{this.state.article.articlelibelle}</h2>
            <img src={img} alt="Produit" width="100%" />
            <p
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
            >
              <span>Prix : </span> <span>{this.state.article.prix} €</span>
            </p>
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
              onClick={() => {
                this.props.addToCart(this.state.article, this.state.qte);
                this.setState({ qte: 1, showPopup: true });
              }}
              className="btnAjouter"
            >
              Ajouter
            </button>
          </div>
          <div className="detailFlex">
            <div>
              <h2>Descritption</h2>
              <p>{this.state.article.description}</p>
            </div>
            <div>
              <h2>Commentaires</h2>
              {!!this.state.com.length ? (
                <div className="listCom">
                  <Comment idkey="1" idBtn="9" />
                  <Comment idkey="2" idBtn="10" />
                  <Comment idkey="3" idBtn="11" />
                  <Comment idkey="4" idBtn="12" />
                  <Comment idkey="5" idBtn="13" />
                  <Comment idkey="6" idBtn="14" />
                  <Comment idkey="7" idBtn="15" />
                  <Comment idkey="8" idBtn="16" />
                </div>
              ) : (
                <p>Aucun commentaire</p>
              )}
            </div>
          </div>
        </div>

        <PopupMsg
          showPopup={this.state.showPopup}
          hide={this.showPopupFunc}
          title="fas fa-cart-plus"
          message={`L'article ${
            this.state.article.articlelibelle
          } vient d'être ajouté au panier`}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addToCart },
)(DetailProduit);
