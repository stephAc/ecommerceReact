import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';
import { connect } from 'react-redux';
class Accueil extends Component {
  state = {
    categorie: 'Catégories',
    selectCategorie: 'Catégories',
    articles: [],
  };

  componentDidMount() {
    fetch('http://mercury.iut-orsay.fr:5000/article')
      .then(result => result.json())
      .then(articles => {
        console.log(articles);
        this.setState(() => ({ articles }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  cateSearch = () => {
    console.log(
      `http://mercury.iut-orsay.fr:5000/article/secteur/${
        this.state.selectCategorie
      }`,
    );
    if (this.state.selectCategorie !== 'Catégories') {
      fetch(
        `http://mercury.iut-orsay.fr:5000/secteur/${
          this.state.selectCategorie
        }`,
      )
        .then(result => result.json())
        .then(articles => {
          console.log(articles);
          //this.setState(() => ({ articles }));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('aucune caté');
    }
  };

  handleSelect = event => {
    this.setState({ categorie: event.target.value });
    switch (event.target.value) {
      case 'Produits de vie':
        this.setState({ selectCategorie: 'V' });
        break;
      case 'Produits de santé':
        this.setState({ selectCategorie: 'S' });
        break;
      default:
        this.setState({ selectCategorie: 'Catégories' });
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="searchAcc">
          <select
            className="selectAcc"
            value={this.state.categorie}
            onChange={this.handleSelect}
          >
            <option value="Catégories">Catégories</option>
            <option value="Produits de vie">Produits de vie</option>
            <option value="Produits de santé">Produits de santé</option>
          </select>
          <button onClick={this.cateSearch}>Search</button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <h1 style={{ marginLeft: 10 }}>Produits</h1>
          <ListeProduit articles={this.state.articles} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.shoppingCart);
  return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps)(Accueil);
