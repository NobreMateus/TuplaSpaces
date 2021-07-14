import React from "react";
import Main from './components/Main'
import LoteDetails from './pages/LoteDetails'
import LancesProvider from './providers/LancesProvider'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewLote from "./pages/NewLote";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <LancesProvider>
      <Router>
          <Switch>
            <Route path="/details/:id">
              <LoteDetails />
            </Route>
            <Route path="/newLote">
              <NewLote />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
    </LancesProvider>
  );
}