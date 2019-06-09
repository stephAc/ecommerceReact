import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <form action="#">
          <input
            className="inputSearch"
            type="text"
            placeholder="Rechercher"
            name="search"
          />
          <button>
            <i class="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}
