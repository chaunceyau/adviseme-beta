import React, { Component } from 'react'
import { Step, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
      <Step.Group fluid size="tiny">
        {/* TODO: completed here for completed steps */}
        <Step
          completed={this.props.degreeSelected}
          name="major"
          active={path.startsWith(urls.plan.degrees)}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.degrees}
        >
          <Icon name="student" />
          <Step.Content>
            <Step.Title>Major Selection</Step.Title>
            <Step.Description>Select your degree programs</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="previous"
          active={path.startsWith(urls.plan.completed)}
          disabled={!this.props.degreeSelected}
          onClick={this.handleItemClick}
          as={Link}
          to={urls.plan.completed}
          disabled={this.props.disable}
        >
          <Icon name="history" />
          <Step.Content>
            <Step.Title>Completed Courses</Step.Title>
            <Step.Description>Select completed coursework</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="select"
          active={path.startsWith(urls.plan.requirements)}
          onClick={this.handleItemClick}
          disabled={!this.props.degreeSelected}
          as={Link}
          to={urls.plan.requirements}
          disabled={this.props.disable}
        >
          <Icon name="list alternate outline" />
          <Step.Content>
            <Step.Title>Course Selection</Step.Title>
            <Step.Description>Choose coursework to plan</Step.Description>
          </Step.Content>
        </Step>

        <Step
          name="plan"
          active={path.startsWith(urls.plan.planner)}
          onClick={this.handleItemClick}
          disabled={!this.props.degreeSelected}
          as={Link}
          to={urls.plan.planner}
          disabled={this.props.disable}
        >
          <Icon name="calendar outline" />
          <Step.Content>
            <Step.Title>Plan Coursework</Step.Title>
            <Step.Description>Plan individual semesters</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

const mapStateToProps = store => ({
  degreeSelected: store.user.degreePrograms.length > 0
})

export default connect(mapStateToProps)(PlanStageBar)
