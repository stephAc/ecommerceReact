import React, { Component } from 'react';
import './AnalyseTab.css';

export default class AnalyseTab extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.rerender === nextProps.rerender) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <table>
        <caption>Produit</caption>
        <thead>
          <tr>
            <th>Du {this.props.dateDeb}</th>
            <th>Au {this.props.dateFin}</th>
            <th>Ventes cumulées</th>
          </tr>
        </thead>
        <tbody />
      </table>
    );
  }
}
