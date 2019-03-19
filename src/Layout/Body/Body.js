import React from 'react';
import Home from '../../Components/Body/Home/Home';
import {Route, Switch} from 'react-router-dom';
import Accueil from '../../Components/Body/Accueil/Accueil';
import RegistrationForm from '../../Components/Body/RegistrationForm/RegistrationForm';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/accueil" component={Accueil}/>
      <Route exact path="/inscription" component={RegistrationForm}/>
    </Switch>
  );
};
