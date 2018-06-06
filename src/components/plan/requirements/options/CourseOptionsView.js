import React, { Component } from "react";

import {
  toTitleCase,
  replaceUnderscoreWithSpace
} from "../../../../util/Utilities";

/**
 * View containing all of the course options for an individual requirement
 */

class CourseOptionsView extends Component {
  render() {
    // requirement name corresponding to the current page (i.e. '/plan/requirements/:requirementName)
    const requirementName = toTitleCase(
      replaceUnderscoreWithSpace(this.props.match.params.requirementId)
    );

    return (
      <div>
        Course Options for&nbsp;
        <b>{requirementName}</b>
      </div>
    );
  }
}

export default CourseOptionsView;
