import React from 'react';
import './ConnectedBtn.css';

const ConnectedBtn = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <i
          className="fas fa-user-circle "
          style={{ marginRight: 5, fontSize: 20 }}
        />
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <span>
          Panier <i className="iconPosition fas fa-cart-arrow-down" />
        </span>
        <span>
          Commandes <i className="iconPosition fas fa-clipboard-list" />
        </span>
        <span>
          Quitter <i className="iconPosition fas fa-sign-out-alt" />
        </span>
      </div>
    </div>
  );
};

export default ConnectedBtn;
