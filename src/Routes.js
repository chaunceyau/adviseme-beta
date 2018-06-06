import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports
import Plan from "./components/plan/Plan";
import Explore from "./components/explore/Explore";

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/plan" component={Plan} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
