import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Routes from '../routes';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../reducers';
import { store, persistor } from '../store';

class App extends Component {
  // render() {
  //   return <Routes />;
  // }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
