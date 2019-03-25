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
          <div className="detailFlex">
            <h2>Name</h2>
            <img src={img} alt="Produit" width="80%" />
            <p>Note : </p>
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
            <div>
              <Comment />
            </div>
          </div>
          <div className="detailFlex">
            <p>Prix : </p>
            <input
              type="number"
              name="qte"
              value={this.state.qte}
              onChange={this.handleQteChange}
              min="1"
              max="100"
            />
            <button>Ajouter</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
