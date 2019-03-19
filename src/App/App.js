import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Body/Home/Home';
import Accueil from '../Components/Body/Accueil/Accueil';
import RegistrationForm from '../Components/Body/RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accueil" component={Accueil} />
        <Route exact path="/inscription" component={RegistrationForm} />
      </Switch>
    );
  }
}

export default App;
