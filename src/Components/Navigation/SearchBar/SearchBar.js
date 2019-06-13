import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    searchField: '',
  };

  handleEntree = event => {
    // if (this.state.searchField !== '') {
    //   if (event.key === 'Enter' || event.type === 'click') {
    //     fetch('http://mercury.iut-orsay.fr:5000/article')
    //       .then(result => result.json())
    //       .then(articles => {
    //         console.log(articles);
    //         this.setState(() => ({ articles }));
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });

    //     this.props.history.push(`/film/research/${this.state.searchField}`);
    //     this.setState({ searchField: '' });
    //   }
      console.log(this.state.searchField);
    }
  };

  handleInputChange = event => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField);
  };

  render() {
    return (
      <div className="search-container" style={{ width: '100%' }}>
        <form
          action="#"
          style={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <input
            className="inputSearch"
            type="text"
            placeholder="Rechercher"
            name="search"
            value={this.state.searchField}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEntree}
          />
          <button>
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}