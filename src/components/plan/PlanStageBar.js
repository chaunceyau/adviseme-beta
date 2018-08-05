import React, { Component } from 'react'
import { Step, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// used to control the urls
import { urls } from '../../util/Constants'
import { REQUIREMENTS_PAGE, COURSE_PLANNING_PAGE } from '../../constants/constants'

/**
 * Shows the three steps (select -> plan -> appointment) involved on planning page
 * Allows user a simple interface to navigate and understand their current position
 */
class PlanStageBar extends Component {
  render() {
    const { path } = this.props
    return (
      <Step.Group fluid size="small">
        <Step
          name="select"
          active={path.startsWith(REQUIREMENTS_PAGE)}
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
          active={path.startsWith(COURSE_PLANNING_PAGE)}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.planner}
        >
          <Icon name="calendar outline" />
          <Step.Content>
            <Step.Title>Plan Coursework</Step.Title>
            <Step.Description>Plan each academic unit towards graduation</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="approval"
          active={path.startsWith('/plan/advisor')}
          onClick={this.handleItemClick}
          // disabled
        >
          <Icon name="hourglass half" />
          <Step.Content>
            <Step.Title>Advisor Appointments</Step.Title>
            <Step.Description>Schedule an appointment with your advisor</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default PlanStageBar
