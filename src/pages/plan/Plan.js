import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Component Imports
import CourseOptions from './CourseOptions'
import DegreeRequirements from './DegreeRequirements'
import CoursePlanner from './CoursePlanner'
import PlanStageBar from '../../components/plan/PlanStageBar'

import { setDegreePrograms, clearNotification, removeCourseFromUnplannedCourses, addCourseToUnplannedCourses } from '../../actions'
import DegreeSelection from './DegreeSelection'
import { urls } from '../../util/Constants'
import CompletedCoursework from './CompletedCoursework'

class Plan extends Component {
  render() {
    let k = true
    return (
      <React.Fragment>
        <PlanStageBar path={this.props.location.pathname} disable={this.props.degreePrograms.length < 1 ? true : false} />
        <Switch>
          {/* <Route path={'/plan/gql'} component={AddNewCourses} /> */}

          <Route
            path={urls.plan.degrees}
            render={() => (
              <DegreeSelection
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
          <Route path={urls.plan.completed} component={CompletedCoursework} />
          <Route
            path={urls.plan.options}
            render={() => {
              return (
                <CourseOptions
                  removeCourseFromUnplannedCourses={this.props.removeCourseFromUnplannedCourses}
                  addCourseToUnplannedCourses={this.props.addCourseToUnplannedCourses}
                  {...this.props}
                />
              )
            }}
          />
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
  clearNotification,
  removeCourseFromUnplannedCourses,
  addCourseToUnplannedCourses
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plan)
