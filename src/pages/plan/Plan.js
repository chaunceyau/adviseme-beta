import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Component Imports
import CourseOptions from './CourseOptions'
import DegreeRequirements from './DegreeRequirements'
import CoursePlanner from './CoursePlanner'
import PlanStageBar from '../../components/plan/PlanStageBar'

import { setDegreePrograms, clearNotification } from '../../actions'
import MajorSelection from './MajorSelection'
import { urls } from '../../util/Constants'

class Plan extends Component {
  render() {
    return (
      <React.Fragment>
        <PlanStageBar path={this.props.location.pathname} disable={this.props.degreePrograms.length < 1 ? true : false} />
        <Switch>
          <Route
            path={urls.plan.home}
            render={() => (
              <MajorSelection
                degreePrograms={this.props.degreePrograms}
                setDegreePrograms={this.props.setDegreePrograms}
                {...this.props}
              />
            )}
            exact
          />
          <Route path={urls.plan.planner} component={CoursePlanner} />
          <Route
            path={urls.plan.requirements}
            render={() => (
              <DegreeRequirements
                clearNotification={clearNotification}
                degreePrograms={this.props.degreePrograms}
                notification={this.props.notification}
                {...this.props}
              />
            )}
            exact
          />
          <Route path={urls.plan.options} component={CourseOptions} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({
  degreePrograms: store.user.degreePrograms,
  notification: store.user.notification
})

const mapDispatchToProps = {
  setDegreePrograms,
  clearNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plan)
