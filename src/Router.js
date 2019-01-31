import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Single from './screens/Single';

const Router = () => (
  <BrowserRouter>
  <div className="main">
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/film/:filmId"
        component={Single}
      />
    </Switch>
  </div>
  </BrowserRouter>
);

export default Router;
