import React from 'react';
import './AnalyseTab.css';

const AnalyseTab = props => {
  return (
    <table>
      <caption>Produit</caption>
      <thead>
        <tr>
          <th>Du {props.dateDeb}</th>
          <th>Au {props.dateFin}</th>
          <th>Ventes cumulées</th>
        </tr>
      </thead>
      <tbody />
    </table>
  );
};

export default AnalyseTab;
