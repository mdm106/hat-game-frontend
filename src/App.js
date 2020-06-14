import React from "react";

import {BrowserRouter as Router,
        Switch,
        Route } from "react-router-dom";

import StartGame from "./components/StartGame";
import GameRound from "./components/GameRound/GameRound";

const App = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/round1">
          <GameRound />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
