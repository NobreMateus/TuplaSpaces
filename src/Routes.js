import React from "react";
import Main from './components/Main'
import LoteDetails from './pages/LoteDetails'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewLote from "./pages/NewLote";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/details/:id">
            <LoteDetails />
          </Route>
          <Route path="/newLote">
            <NewLote />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}