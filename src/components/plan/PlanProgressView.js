import React, { Component } from "react";
import { Step, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// used to control the urls
import { urls } from "../../util/Constants";

/**
 * Shows the three steps (select -> plan -> appointment) involved on planning page
 * Allows user a simple interface to navigate and understand their current position
 */
class PlanProgressView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "select"
    };
  }

  // handle switching between the three steps of process
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Step.Group fluid size="small">
        <Step
          name="select"
          active={activeItem === "select"}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.requirements}
        >
          <Icon name="book" />
          <Step.Content>
            <Step.Title>Course Selection</Step.Title>
            <Step.Description>Choose the classes you desire</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="plan"
          active={activeItem === "plan"}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.planner}
        >
          <Icon name="calendar outline" />
          <Step.Content>
            <Step.Title>Plan Coursework</Step.Title>
            <Step.Description>
              Plan each academic unit towards graduation
            </Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="approval"
          active={activeItem === "approval"}
          onClick={this.handleItemClick}
          // disabled
        >
          <Icon name="hourglass half" />
          <Step.Content>
            <Step.Title>Advisor Appointments</Step.Title>
            <Step.Description>
              Schedule an appointment with your advisor
            </Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    );
  }
}

export default PlanProgressView;
