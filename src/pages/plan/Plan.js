import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Component Imports
import CourseOptions from './CourseOptions'
import DegreeRequirements from './DegreeRequirements'
import CoursePlanner from './CoursePlanner'
import PlanStageBar from '../../components/plan/PlanStageBar'

import { Query } from 'react-apollo'
import { GET_STUDENT_PLAN_INFORMATION } from '../../graphql/queries'
import MajorSelection from './MajorSelection'
import store from '../../store'
import { setUnplannedCourses, setAcademicUnits } from '../../actions'
import { urls } from '../../util/Constants';

class Plan extends Component {
  render3() {
    return (
      <Query query={GET_STUDENT_PLAN_INFORMATION}>
        {({ loading, error, data }) => {
          if (loading) return <span>loading</span>
          if (error) return <span>error</span>
          if (data) {
            return <span>{JSON.stringify(data)}</span>
          }
        }}
      </Query>
    )
  }
  render() {
    return (
      <Query query={GET_STUDENT_PLAN_INFORMATION}>
        {({ loading, error, data }) => {
          if (loading) return <span>loading</span>
          if (error) return <span>error</span>
          if (data) {
            console.log('dta', data)
            const { unplannedCourses, studentAcademicUnits, degreePrograms } = data.user
            store.dispatch(setUnplannedCourses(unplannedCourses))
            store.dispatch(setAcademicUnits(studentAcademicUnits))
            // TODO: IS THIS THE BEST WAY TO DO OR NO?
            // unplannedCourses.forEach(course => plannerCourseIDs.push(course.id))
            // studentAcademicUnits.forEach(({ courses }) => {
            //   courses.forEach(course => plannerCourseIDs.push(course.id))
            // })

            return (
              <React.Fragment>
                <PlanStageBar path={this.props.location.pathname} />
                <Switch>
                  <Route path={urls.plan.home} component={MajorSelection} exact />
                  <Route path={urls.plan.planner} render={() => <CoursePlanner studentAcademicUnits={studentAcademicUnits} />} />
                  <Route
                    path={urls.plan.requirements}
                    render={() => <DegreeRequirements loading={loading} degreePrograms={degreePrograms} />}
                    exact
                  />
                  <Route path={urls.plan.options} component={CourseOptions} />
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
