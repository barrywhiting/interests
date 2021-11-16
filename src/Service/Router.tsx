import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import About from '../components/About/About';
import Games from '../components/Games/Games';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Router;
