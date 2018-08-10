import React, { Component } from 'react'
import { Step, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// used to control the urls
import { urls } from '../../util/Constants'

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
          name="major"
          active={path === urls.plan.home || path === urls.plan.home + '/'}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.home}
        >
          <Icon name="list alternate outline" />
          <Step.Content>
            <Step.Title>Major Selection</Step.Title>
            <Step.Description>Select your major for planning</Step.Description>
          </Step.Content>
        </Step>
        <Step
          name="select"
          active={path.startsWith(urls.plan.requirements)}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.requirements}
          disabled={this.props.disable}
        >
          <Icon name="book" />
          <Step.Content>
            <Step.Title>Course Selection</Step.Title>
            <Step.Description>Choose the classes you desire</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="plan"
          active={path.startsWith(urls.plan.planner)}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.planner}
          disabled={this.props.disable}
        >
          <Icon name="calendar outline" />
          <Step.Content>
            <Step.Title>Plan Coursework</Step.Title>
            <Step.Description>Plan each academic unit towards graduation</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default PlanStageBar
