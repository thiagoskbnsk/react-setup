import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { history } from "./history";

import ExamplePage from "../pages/ExamplePage";
import TodoPage from "../pages/TodoPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ExamplePage} />
          <Route exact path="/todo" component={TodoPage} />

          <Redirect to="/page-not-found" />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
