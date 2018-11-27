import React, { Component } from 'react';
import './App.css';
import { Header, Body, Footer } from '../Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
