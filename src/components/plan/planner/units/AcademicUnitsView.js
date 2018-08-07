import React, { Component } from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux'

// component imports
import AcademicUnit from './AcademicUnit'
import { TEST_ME_CLIENT_PICKED_UNITS } from '../../../../graphql/queries'
import ContentLoading from '../../../../pages/ContentLoading'
import { client } from '../../../../App'

/**
 * View holding all of the academic units the student has added
 */
class AcademicUnitsView extends Component {
  // render rows of three academic units wrapped in columns each
  renderRowsOfUnits(academicUnits) {
    let rows = []

    if (!Array.isArray(academicUnits)) return <Grid.Row>No academic units to display. Click to add one.</Grid.Row>
    // take the units and map into rows
    academicUnits.map(academicUnit => {
      return rows.push(
        <Grid.Column key={academicUnit.id}>
          <AcademicUnit key={academicUnit.id} courses={academicUnit.courses} name={academicUnit.academicUnit} />
        </Grid.Column>
      )
    })

    // divide in to chunks of threes for the mapping
    return _.chunk(rows, 3).map(group => {
      if (group.length < 3)
        return (
          <Grid.Row key={group}>
            {group}
            <Grid.Column>
              <Card
                // TODO: UPDATE THIS
                onClick={() => {
                  client
                    .query({ query: TEST_ME_CLIENT_PICKED_UNITS })
                    .then(({ data: { User } }) => console.log(User))
                    .catch(err => console.log(err))
                }}
                style={{
                  height: '100%',
                  backgroundColor: 'gainsboro',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 250
                }}
              >
                <Icon name="add circle" size="huge" style={{ color: 'white', marginBottom: '1rem' }} />
                <span style={{ color: 'white', fontWeight: '600', fontSize: '1.35rem' }}>Add Semester</span>
              </Card>
            </Grid.Column>
          </Grid.Row>
        )
      return <Grid.Row key={group}>{group}</Grid.Row>
    })
  }

  renderUnitsLoading() {
    return (
      <Grid.Row>
        <ContentLoading />
      </Grid.Row>
    )
  }

  /**
   *
   */
  render() {
    // TODO: MIGHT NOT NEED 65vh maxheight after remove testbar
    return (
      <Grid doubling columns={3} stackable>
        {this.renderRowsOfUnits(this.props.academicUnits)}
      </Grid>
    )
  }
}

const mapStateToProps = store => ({
  academicUnits: store.user.academicUnits
})

export default connect(mapStateToProps)(AcademicUnitsView)
