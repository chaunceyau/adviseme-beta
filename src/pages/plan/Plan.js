import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Component Imports
import PlanWelcome from './PlanWelcome'
import CourseOptions from './CourseOptions'
import DegreeRequirements from './DegreeRequirements'
import CoursePlanner from './CoursePlanner'
import PlanStageBar from '../../components/plan/PlanStageBar'

import { REQUIREMENTS_PAGE, COURSE_PLANNING_PAGE, COURSE_OPTIONS_PAGE, PLAN_HOMEPAGE } from '../../constants/constants'
import { Query } from '../../../node_modules/react-apollo'
import { GET_STUDENT_PLAN_INFORMATION } from '../../graphql/queries'

class Plan extends Component {
  render() {
    let plannerCourseIDs = []
    return (
      <Query query={GET_STUDENT_PLAN_INFORMATION}>
        {({ loading, error, data: { User } }) => {
          if (loading) return <span>loading</span>
          if (error) return <span>error</span>
          if (User) {
            const { unplannedCourses, studentAcademicUnits, degreePrograms } = User

            // TODO: IS THIS THE BEST WAY TO DO OR NO?
            unplannedCourses.forEach(course => plannerCourseIDs.push(course.id))
            studentAcademicUnits.forEach(({ courses }) => {
              courses.forEach(course => plannerCourseIDs.push(course.id))
            })

            return (
              <React.Fragment>
                <PlanStageBar path={this.props.location.pathname} />
                <Switch>
                  <Route path={PLAN_HOMEPAGE} component={PlanWelcome} exact />
                  <Route
                    path={COURSE_PLANNING_PAGE}
                    render={() => <CoursePlanner unplannedCourses={unplannedCourses} studentAcademicUnits={studentAcademicUnits} />}
                  />
                  <Route
                    path={REQUIREMENTS_PAGE}
                    component={() => <DegreeRequirements degreePrograms={degreePrograms} plannerCourseIDs={plannerCourseIDs} />}
                    exact
                  />
                  <Route path={COURSE_OPTIONS_PAGE} component={CourseOptions} />
                </Switch>
              </React.Fragment>
            )
          }
        }}
      </Query>
    )
  }
}

export default Plan
