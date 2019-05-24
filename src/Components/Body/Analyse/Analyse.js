import React, { Component, Fragment } from 'react';
import Header from '../../Navigation/Header/Header';
import Spinner from '../Spinner/Spinner';
import AnalyseTab from '../AnalyseTab/AnalyseTab';
import './Analyse.css';

export default class Analyse extends Component {
  state = {
    dateJour: new Date(),
    dateDebut: new Date(),
    dateFin: new Date(),
  };

  componentWillMount = () => {
    const date = new Date();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const dateJour = date.getFullYear() + '-' + month + '-' + day;

    this.setState({
      dateJour: dateJour,
      dateDebut: dateJour,
      dateFin: dateJour,
      grouper: '',
      selectCate: 'Produits de vie',
      selectProd: '',
      loading: false,
      showTab: false,
      rerender: false,
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAnalyseSearch = () => {
    this.setState(
      {
        loading: !this.state.loading,
        showTab: false,
        rerender: !this.state.rerender,
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: !this.state.loading,
            showTab: true,
          });
        }, 3000);
      },
    );
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="analysePageStyle">
          <div className="childFlexDisplay">
            <label htmlFor="deb" style={{ marginRight: 30 }}>
              Début :
              <br />
              <input
                type="date"
                id="deb"
                name="dateDebut"
                className="dateStyle"
                value={this.state.dateDebut}
                min="2018-01-01"
                max={this.state.dateJour}
                onChange={this.handleInput}
              />
            </label>

            <label htmlFor="fin">
              Fin :
              <br />
              <input
                type="date"
                id="fin"
                name="dateFin"
                className="dateStyle"
                value={this.state.dateFin}
                min="2018-01-01"
                max={this.state.dateJour}
                onChange={this.handleInput}
              />
            </label>
          </div>

          <div className="childFlexDisplay">
            <label htmlFor="produit">
              Produit :
              <br />
              <select
                id="produit"
                name="selectProd"
                className="selectStyle"
                value={this.state.selectProd}
                onChange={this.handleInput}
              />
            </label>

            <br />

            <label htmlFor="categorie">
              Secteur :
              <br />
              <select
                id="categorie"
                name="selectCate"
                className="selectStyle"
                value={this.state.selectCate}
                onChange={this.handleInput}
              >
                <option value="Produits de santé">Produits de santé</option>
                <option value="Produits de vie">Produits de vie</option>
              </select>
            </label>

            <div>
              <input
                type="radio"
                value="mois"
                defaultChecked
                name="grouper"
                onChange={this.handleInput}
              />
              Mois
              <input
                type="radio"
                value="semaine"
                name="grouper"
                onChange={this.handleInput}
              />
              Semaine
            </div>
          </div>
          <button
            style={{ alignSelf: 'center' }}
            onClick={this.handleAnalyseSearch}
          >
            Rechercher
          </button>
        </div>

        {this.state.loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner />
          </div>
        ) : null}
        {this.state.showTab ? (
          <AnalyseTab
            dateDeb={this.state.dateDebut}
            dateFin={this.state.dateFin}
            rerender={this.state.rerender}
          />
        ) : null}
      </Fragment>
    );
  }
}
