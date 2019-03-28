import React, { Component, Fragment } from 'react';
import './DetailProduit.css';
import Header from '../../Navigation/Header/Header';
import img from '../../../assets/img/backgroundHomePage/dawn-3793717_640.jpg';
import Comment from '../Comment/Comment';

export default class DetailProduit extends Component {
  state = {
    qte: 1,
  };

  handleQteChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="gridDetail">
          <div className="detailFlex" id="itemDetailOne">
            <h2>Name</h2>
            <img src={img} alt="Produit" width="80%" />
            <p>Note : </p>
            <p>Prix : </p>
            <p
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              Quantité :
              <input
                type="number"
                name="qte"
                value={this.state.qte}
                onChange={this.handleQteChange}
                min="1"
                max="100"
                className="inputQteDetail"
              />
            </p>

            <button className="btnAjouter">Ajouter</button>
          </div>
          <div className="detailFlex descriptionDetail">
            <h2>Descritption</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2>Commentaires</h2>
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
          </div>
        </div>
      </Fragment>
    );
  }
}
