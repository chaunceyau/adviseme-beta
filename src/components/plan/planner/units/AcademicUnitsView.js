import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import _ from 'lodash'

// component imports
import AcademicUnit from './AcademicUnit'

/**
 * View holding all of the academic units the student has added
 */
class AcademicUnitsView extends Component {
  // render rows of three academic units wrapped in columns each
  renderRowsOfUnits() {
    let rows = []

    // take the units and map into rows
    this.props.academicUnits.map(academicUnit => {
      return rows.push(
        <Grid.Column key={academicUnit.name}>
          <AcademicUnit courses={academicUnit.courses} name={academicUnit.academicUnit} />
        </Grid.Column>
      )
    })

    // divide in to chunks of threes for the mapping
    return _.chunk(rows, 3).map(group => <Grid.Row key={group}>{group}</Grid.Row>)
  }

  /**
   *
   */
  render() {
    // TODO: MIGHT NOT NEED 65vh maxheight after remove testbar
    return (
      <Grid doubling columns={3} stackable style={{ maxHeight: '65vh' }}>
        {this.renderRowsOfUnits()}
      </Grid>
    )
  }
}

export default AcademicUnitsView
