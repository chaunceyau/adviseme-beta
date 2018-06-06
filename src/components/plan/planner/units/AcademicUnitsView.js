import React, { Component } from "react";
import AcademicUnit from "./AcademicUnit";

/**
 * View holding all of the academic units the student has added
 */
class AcademicUnitsView extends Component {
    
  /**
   * Render all of the academic units
   */
  render() {
    return (
      <React.Fragment>
        <AcademicUnit />
        <AcademicUnit />
      </React.Fragment>
    );
  }
}

export default AcademicUnitsView;
