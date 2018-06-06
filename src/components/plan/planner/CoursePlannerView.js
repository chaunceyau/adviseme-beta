import React, { Component } from "react";
import CourseSidebar from "./sidebar/CourseSidebar";
import AcademicUnitsView from "./units/AcademicUnitsView";

/**
 * View handling the layout for
 */
class CoursePlannerView extends Component {
  render() {
    return (
      <React.Fragment>
        <CourseSidebar />
        <AcademicUnitsView />
      </React.Fragment>
    );
  }
}

export default CoursePlannerView;
