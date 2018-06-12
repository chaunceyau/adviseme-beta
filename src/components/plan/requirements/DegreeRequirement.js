import React, { Component } from "react";
import { Segment, Icon } from "semantic-ui-react";

class DegreeRequirementGroup extends Component {
  render() {
    if (!Array.isArray(this.props.requirements)) {
      console.log("not an array");
      return <div>Error forming requirement group.. Contact your advisor.</div>;
    }
    return (
      <Segment.Group>
        {this.props.requirements.map(requirement => {
          return <DegreeRequirement requirement={requirement} />;
        })}
      </Segment.Group>
    );
  }
}

class DegreeRequirement extends Component {
  render() {
    return (
      <Segment>
        {this.props.requirement.completed
          ? [
              <Icon color="green" name="check circle" />,
              <span style={{ color: "green" }}>
                {this.props.requirement.name}
              </span>
            ]
          : [
              <Icon color="red" name="remove circle" />,
              <span style={{ color: "red" }}>
                {this.props.requirement.name}
              </span>
            ]}
      </Segment>
    );
  }
}

export default DegreeRequirementGroup;
