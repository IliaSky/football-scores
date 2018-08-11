import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './Page';
// import { AnimatedSwitch } from 'react-router-transition';

const Navigator = ({routes}) => (
  <Router>
    <Switch>
      {routes.map(route => (
        <Route path={route.path} key={route.path} render={
          () => <Page url={!route.offline && window.location.pathname} component={route.component} list={route.list} />
        } />
      ))}
    </Switch>
  </Router>
);

export default Navigator;
