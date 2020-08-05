import React from "react";
import "./styles.css";

import HeaderPerso from "./components/HeaderPerso";
import BodyPerso from "./components/BodyPerso";
import FooterPerso from "./components/FooterPerso";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <HeaderPerso />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <BodyPerso />
          </Route>
        </Switch>
      </Router>

      <FooterPerso />
    </div>
  );
}
