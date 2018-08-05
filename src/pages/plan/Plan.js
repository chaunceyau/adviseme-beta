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
import { GET_STUDENT_PLAN_ACADEMIC_UNITS, GET_STUDENT_UNPLANNED_COURSES } from '../../graphql/queries'

class Plan extends Component {
  render() {
    return (
      <Query query={GET_STUDENT_PLAN_ACADEMIC_UNITS}>
        {({ loading, error, data }) => {
          return (
            <Query query={GET_STUDENT_UNPLANNED_COURSES}>
              {({ loading, error, data }) => {
                if (data) {
                  console.log('lele', data.User)
                  return (
                    <React.Fragment>
                      <PlanStageBar path={this.props.location.pathname} />
                      <Switch>
                        <Route path={PLAN_HOMEPAGE} component={PlanWelcome} exact />
                        <Route path={COURSE_PLANNING_PAGE} render={() => <CoursePlanner />} />
                        <Route path={REQUIREMENTS_PAGE} component={DegreeRequirements} exact />
                        <Route path={COURSE_OPTIONS_PAGE} component={CourseOptions} />
                      </Switch>
                    </React.Fragment>
                  )
                }
              }}
            </Query>
          )
        }}
      </Query>
    )
  }
}

export default Plan
