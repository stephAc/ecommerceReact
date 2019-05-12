import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
export default class App extends Component {
  render() {
    return <Loader type="TailSpin" color="#32CD32" height={80} width={80} />;
  }
}
