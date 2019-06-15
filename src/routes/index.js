import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Body/Home/Home';
import Accueil from '../Components/Body/Accueil/Accueil';
import Registration from '../Components/Body/Registration/Registration';
import Connexion from '../Components/Body/Connexion/Connexion';
import Panier from '../Components/Body/Panier/Panier';
import DetailProduit from '../Components/Body/DetailProduit/DetailProduit';
import Info from '../Components/Body/Info/Info';
import Analyse from '../Components/Body/Analyse/Analyse';
import { BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/accueil" component={Accueil} />
        <Route exact path="/inscription" component={Registration} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/panier" component={Panier} />
        <Route exact path="/detail" component={DetailProduit} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/analyse" component={Analyse} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
