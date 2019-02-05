import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Single from './screens/Single';
import Genres from './screens/Genres';
import VoteAverage from './screens/VoteAverage';

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
        <Route
          exact
          path="/genres/:genresId/:genresName"
          component={Genres}
        />
        <Route
          exact
          path="/ranking/:valueGte/:valueLte"
          component={VoteAverage}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;