import React, { Component } from 'react';
import './App.css';
import Routes from '../routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

class App extends Component {
  // render() {
  //   return <Routes />;
  // }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
