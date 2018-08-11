import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Page from './Page';

const Navigator = ({routes}) => (
  <Router>
    <AnimatedSwitch
      atEnter={{ opacity: 1 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="AnimatedSwitch"
      >
      {routes.map(route => (
        <Route path={route.path} key={route.path} render={() =>
          <Page
            url={!route.offline && window.location.pathname}
            title={route.title}
            component={route.component}
            list={route.list} />
        } />
      ))}
    </AnimatedSwitch>
  </Router>
);

export default Navigator;
