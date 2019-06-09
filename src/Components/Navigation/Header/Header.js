import './Header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/img/logo.jpg';
import LogBtn from '../ConnectedBtn/ConnectedBtn';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
class Header extends Component {
  render() {
    const cartLength = this.props.shoppingCart.shoppingCart.length;
    return (
      <header className="headerStyle flexDisplayNav">
        <Link to="/accueil">
          <img alt="logo" src={logoImg} style={{ height: 50 }} />
        </Link>
        <SearchBar />
        <div className="flexDisplayNav">
          <Link to="/connexion">
            <button className="navBtn">Se connecter</button>
          </Link>
          <Link to="/panier">
            <button className="navBtn">
              Panier <i className="fas fa-cart-arrow-down" />
              {cartLength !== 0 ? <div class="badge">{cartLength}</div> : null}
            </button>
          </Link>
          <LogBtn />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps)(Header);
