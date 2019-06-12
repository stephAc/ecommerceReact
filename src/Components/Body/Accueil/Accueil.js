import React, { Component, Fragment } from 'react';
import './Accueil.css';
import ListeProduit from '../ListeProduit/ListeProduit';
import Header from '../../Navigation/Header/Header';
import { connect } from 'react-redux';
import Filter from '../Filter/Filter';

class Accueil extends Component {
  state = {
    categorie: 'Catégories',
    selectCategorie: 'Catégories',
    articles: [],
    filtre: false,
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
    if (this.state.selectCategorie !== 'Catégories') {
      fetch(
        `http://mercury.iut-orsay.fr:5000/article/secteur/${
          this.state.selectCategorie
        }`,
      )
        .then(result => result.json())
        .then(articles => {
          this.setState(() => ({ articles, filtre: false }));
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
    const showHideFilter = this.state.filtre
      ? 'transitionShow'
      : 'transitionHide';

    return (
      <Fragment>
        <Header />

        <div style={{ marginBottom: 15 }}>
          <div className="flexRowDisplay">
            <h1 style={{ marginLeft: 10 }}>Produits</h1>
            <button
              onClick={() => {
                this.setState({ filtre: !this.state.filtre });
              }}
              style={{ minWidth: 115 }}
            >
              Filtrer <i style={{ float: 'right' }} className="fas fa-filter" />
            </button>
          </div>
          <div className={`${showHideFilter}`}>
            <Filter
              categorie={this.state.categorie}
              handleSelect={this.handleSelect}
              cateSearch={this.cateSearch}
            />
          </div>

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
