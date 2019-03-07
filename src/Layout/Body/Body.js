import React from 'react';
import Home from '../../Components/Body/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Accueil from '../../Components/Body/Accueil/Accueil';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/accueil" component={Accueil} />
    </Switch>
  );
};
