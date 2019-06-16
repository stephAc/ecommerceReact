import './Header.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/img/logo.jpg';
import LogBtn from '../ConnectedBtn/ConnectedBtn';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import Burger from '../Burger/Burger';
class Header extends Component {
  render() {
    const cartLength = this.props.shoppingCart.length;
    return (
      <header className="headerStyle flexDisplayNav">
        <Link to="/accueil">
          <img alt="logo" src={logoImg} style={{ height: 50 }} />
        </Link>
        <SearchBar />
        <Burger />
        <div className="flexDisplayNav">
          {this.props.userLog ? (
            <LogBtn />
          ) : (
            <Fragment>
              <Link to="/panier" className="hideLink">
                <button className="navBtn">
                  <span className="hideTxt">Panier</span>
                  <i className="fas fa-cart-arrow-down" />
                  {cartLength !== 0 ? (
                    <div className="badge">{cartLength}</div>
                  ) : null}
                </button>
              </Link>
              <Link to="/connexion" className="hideLink">
                <button className="navBtn">Connexion</button>
              </Link>
            </Fragment>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.panier.shoppingCart,
    userLog: state.user.userLog,
  };
};

export default connect(mapStateToProps)(Header);
