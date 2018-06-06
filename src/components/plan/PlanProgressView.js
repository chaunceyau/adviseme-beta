import React, { Component } from "react";
import { Link } from "react-router-dom";

class PlanProgressView extends Component {
  render() {
    return (
      <div>
        <Link to="/plan/requirements">Requirements</Link>
        ->
        <Link to="/plan/planner">Planning</Link>
      </div>
    );
  }
}

export default PlanProgressView;
