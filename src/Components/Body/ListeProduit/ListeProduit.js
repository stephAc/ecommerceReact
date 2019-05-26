import React, { Component } from 'react';
import CardProduit from '../CardProduit/CardProduit';
import './ListeProduit.css';

export default class ListeProduit extends Component {
  render() {
    return (
      <div className="listProd">
        {/* {this.props.articles.length === 0
          ? 'vide'
          : this.props.articles[0].article_id} */}
        {this.props.articles.map((article, key) => (
          <div key={key}>
            <CardProduit article={article} />
          </div>
        ))}
      </div>
    );
  }
}
