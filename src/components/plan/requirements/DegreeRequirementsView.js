import React, { Component } from "react";

//
import { degreeRequirements } from "../../../api/api";
import { Segment } from "semantic-ui-react";
import TopLevelDegreeRequirements from "./TopLevelDegreeRequirements";
class DegreeRequirementsView extends Component {
  /**
   *
   */
  renderTopLevelDegreeRequirementCategories() {
    var topLevelRequirements = [];
    degreeRequirements.map(req => {
      topLevelRequirements.push(req);
    });

    return <TopLevelDegreeRequirements requirements={topLevelRequirements} />;
  }

  /**
   *
   */
  render() {
    return (
      <React.Fragment>
        <h4>Select courses to fulfill the following requirements:</h4>
        {this.renderTopLevelDegreeRequirementCategories()}
      </React.Fragment>
    );
  }
}
export default DegreeRequirementsView;
