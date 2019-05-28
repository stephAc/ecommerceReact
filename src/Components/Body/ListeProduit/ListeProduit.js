import React, { Component, Fragment } from 'react';
import CardProduit from '../CardProduit/CardProduit';
import './ListeProduit.css';

export default class ListeProduit extends Component {
  render() {
    return (
      <Fragment>
        {!!this.props.articles.length ? (
          <div className="listProd">
            {this.props.articles.map((article, key) => (
              <div key={key}>
                <CardProduit article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>Aucun articles trouvé</div>
        )}
      </Fragment>
    );
  }
}
