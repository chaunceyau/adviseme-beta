import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Component Imports
import PlanWelcome from "./PlanWelcome";
import PlanProgressView from "./PlanProgressView";

import CourseOptionsView from "./requirements/options/CourseOptionsView";
import CoursePlannerView from "./planner/CoursePlannerView";
import DegreeRequirementsView from "./requirements/DegreeRequirementsView";

class Plan extends Component {
  render() {
    return (
      <React.Fragment>
        <PlanProgressView />
        <Switch>
          <Route path="/plan" component={PlanWelcome} exact />
          <Route path="/plan/planner" component={CoursePlannerView} />
          <Route
            path="/plan/requirements"
            component={DegreeRequirementsView}
            exact
          />
          <Route
            path="/plan/requirements/:requirementId/:requirementId2?/:requirementId3?/:requirementId4?/:requirementId5?"
            component={CourseOptionsView}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Plan;
