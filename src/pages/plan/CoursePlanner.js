import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd';

//
import CourseSidebar from '../../components/plan/planner/sidebar/CourseSidebar'
import AcademicUnitsView from '../../components/plan/planner/units/AcademicUnitsView'

/**
 * View handling the layout for
 */
class CoursePlanner extends Component {
  render() {
    return (
      <Segment>
        <Grid style={{ height: '70vh' }} columns="equal" stackable>
          <Grid.Column style={{ minWidth: 250 }} width={4}>
            <CourseSidebar />
          </Grid.Column>
          <Grid.Column style={{ overflow: 'auto' }}>
            <AcademicUnitsView />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default CoursePlanner
// export default DragDropContext(HTML5Backend)(CoursePlanningPage);
