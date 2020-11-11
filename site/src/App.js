import React from "react";
import { Home, SingleRecipe } from "./components";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/recipe/:name" render={() => <SingleRecipe />} />
      </Switch>
    </Router>
  );
}

export default App;
