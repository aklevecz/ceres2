import React from "react";
import { Route, Switch } from "react-router";
import Home from "../components/Home";
import NoMatch from "../components/NoMatch";
import Place from "../components/Place";

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/place/:place" component={Place} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
