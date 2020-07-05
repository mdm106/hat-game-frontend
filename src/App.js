import React from "react";

import history from "./history";

import {Router,
        Switch,
        Route } from "react-router-dom";

import StartGame from "./components/StartGame";
import GameRound from "./components/GameRound";
import Completion from "./components/Completion"

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
        <Route exact path="/results">
          <Completion />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
