import React from 'react';
import './ConnectedBtn.css';
import { Link } from 'react-router-dom';

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
        <Link className="linkStyle" to="/info">
          <span>
            Profil <i className="iconPosition fas fa-user" />
          </span>
        </Link>
        <Link className="linkStyle" to="/panier">
          <span>
            Panier <i className="iconPosition fas fa-cart-arrow-down" />
          </span>
        </Link>
        <Link className="linkStyle" to="/">
          <span>
            Commandes <i className="iconPosition fas fa-clipboard-list" />
          </span>
        </Link>
        <Link className="linkStyle" to="/">
          <span>
            Quitter <i className="iconPosition fas fa-sign-out-alt" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ConnectedBtn;
