import React from 'react';
import './Banniere.css';

const Banniere = props => {
  return (
    <div
      className="banniere"
      style={{
        backgroundColor: `${props.color}`,
        display: `${props.hideShow}`,
      }}
    >
      <p>{props.message}</p>
    </div>
  );
};

export default Banniere;
