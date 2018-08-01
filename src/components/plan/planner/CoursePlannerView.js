import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import _ from 'lodash'
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd';

//
import { GET_STUDENT_PLANNED_ACADEMIC_UNITS } from '../../../graphql/queries'
import Testbar from '../../../Testbar'
import CourseSidebar from './sidebar/CourseSidebar'
import AcademicUnitsView from './units/AcademicUnitsView'

/**
 * View handling the layout for
 */
class CoursePlannerView extends Component {
  render() {
    return (
      <Query query={GET_STUDENT_PLANNED_ACADEMIC_UNITS}>
        {({ loading, error, data }) => {
          if (loading) return <span>loading</span>
          if (error) return <span>error</span>
          if (data) {
            const academicUnits = _.groupBy(data.User.studentAcademicUnits, unit => unit.academicUnit !== 'UNDEFINED')
            return (
              <Segment style={{ height: '70vh' }}>
                <Testbar />
                <Grid columns="equal" stackable>
                  <Grid.Column style={{ minWidth: 250 }} width={4}>
                    <CourseSidebar sidebarCourses={academicUnits['false'][0].courses} />
                  </Grid.Column>
                  <Grid.Column style={{ overflow: 'auto' }}>
                    <AcademicUnitsView academicUnits={academicUnits['true']} />
                  </Grid.Column>
                </Grid>
              </Segment>
            )
          }
        }}
      </Query>
    )
  }
}

const mapStateToProps = state => ({
  unplannedCourses: state.planner.unplannedCourses,
  academicUnits: state.planner.academicUnits
})

export default connect(mapStateToProps)(CoursePlannerView)
// export default DragDropContext(HTML5Backend)(CoursePlanningPage);
