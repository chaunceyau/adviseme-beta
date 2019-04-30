import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Query } from 'react-apollo'

// component imports
import AcademicUnit from './AcademicUnit'
import ContentLoading from '../../../../pages/ContentLoading'
import AddAcademicUnit from './AddAcademicUnit'
import { addAcademicUnit, setAvailableAcademicUnits } from '../../../../actions'
import { GET_AVAILABLE_ACADEMIC_UNITS } from '../../../../graphql/queries'

/**
 * View holding all of the academic units the student has added
 */
class AcademicUnitsView extends Component {
  // render rows of three academic units wrapped in columns each
  renderRowsOfUnits(academicUnits, availableUnits) {
    if (!Array.isArray(academicUnits)) return <Grid.Row>No academic units to display. Click to add one.</Grid.Row>
    if (!academicUnits.length)
      return (
        <Grid.Row>
          <Grid.Column>
            <AddAcademicUnit
              academicUnits={academicUnits}
              availableUnits={availableUnits}
              addAcademicUnit={this.props.addAcademicUnit}
            />
          </Grid.Column>
        </Grid.Row>
      )
    let columns = []

    academicUnits
      .sort((a, b) => availableUnits.indexOf(a.name) - availableUnits.indexOf(b.name))
      .map(academicUnit => {
        return columns.push(
          <Grid.Column key={academicUnit.name}>
            <AcademicUnit courses={academicUnit.courses} name={academicUnit.name} />
          </Grid.Column>
        )
      })

    // TODO: REWRITE THIS METHOD PROBABLY
    // divide in to chunks of threes for the mapping
    return _.chunk(columns, 3).map((chunk, index) => {
      if (index === Math.ceil(columns.length / 3 - 1)) {
        if (chunk.length === 3)
          return [
            <Grid.Row key={index}>{chunk}</Grid.Row>,
            <Grid.Row key={index + '2'}>
              <Grid.Column>
                <AddAcademicUnit
                  academicUnits={academicUnits}
                  availableUnits={availableUnits}
                  addAcademicUnit={this.props.addAcademicUnit}
                />
              </Grid.Column>
            </Grid.Row>
          ]
        return (
          <Grid.Row key={index}>
            {chunk}
            <Grid.Column>
              <AddAcademicUnit
                academicUnits={academicUnits}
                availableUnits={availableUnits}
                addAcademicUnit={this.props.addAcademicUnit}
              />
            </Grid.Column>
          </Grid.Row>
        )
      }
      return <Grid.Row key={index}>{chunk}</Grid.Row>
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
    return (
      <Grid doubling columns={3} stackable>
        <Query query={GET_AVAILABLE_ACADEMIC_UNITS}>
          {({ loading, error, data }) => {
            if (loading) return <ContentLoading />
            if (error) return <span>error</span>
            if (data) {
              const availableUnits = data.__type.enumValues.reduce((acc, { name }) => {
                acc.push(name)
                return acc
              }, [])
              this.props.setAvailableAcademicUnits(availableUnits)
              return this.renderRowsOfUnits(this.props.academicUnits, availableUnits)
            }
          }}
        </Query>
      </Grid>
    )
  }
}

const mapStateToProps = store => ({
  academicUnits: store.user.academicUnits
})

export default connect(
  mapStateToProps,
  { addAcademicUnit, setAvailableAcademicUnits }
)(AcademicUnitsView)
