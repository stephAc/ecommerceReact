import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Burger = props => {
  return (
    <div className="dropdown hideBurger">
      <button className="dropbtn">
        <i className="fas fa-bars" style={{ marginRight: 5, fontSize: 20 }} />
      </button>
      <div className="dropdown-content">
        <Link className="linkStyle" to="/connexion">
          <span>
            Se connecter <i className="iconPosition fas fa-user" />
          </span>
        </Link>
        <Link className="linkStyle" to="/panier">
          <span>
            Panier{' '}
            {props.shoppingCart.length !== 0 ? props.shoppingCart.length : null}
            <i className="iconPosition fas fa-cart-arrow-down" />
          </span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { shoppingCart: state.panier.shoppingCart };
};

export default connect(mapStateToProps)(Burger);
