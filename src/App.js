import React from "react";

import {BrowserRouter as Router,
        Switch,
        Route } from "react-router-dom";

import StartGame from "./components/StartGame";

const App = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
