import React from "react";

import history from "./history";

import {Router,
        Switch,
        Route } from "react-router-dom";

import StartGame from "./components/StartGame";
import GameRound from "./components/GameRound";

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/round">
          <GameRound />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
