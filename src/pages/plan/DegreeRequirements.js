import React, { Component } from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

//
import DegreeRequirementGroup from '../../components/plan/requirements/DegreeRequirementGroup'
import ContentLoading from '../ContentLoading'

//
class DegreeRequirements extends Component {
  /**
   *
   * @param {*} degreePrograms
   */
  renderDegreeProgramBlocks(degreePrograms) {
    // map through each degree program a student is in
    return degreePrograms.map(degree => {
      let topLevelRequirements = []

      // create the accordion then loop through requirements
      degree.degreeProgramRequirements.forEach(requirement => {
        topLevelRequirements.push(requirement)
      })
      return (
        <React.Fragment key={'degReqFrag'}>
          <Header attached="top">
            <Grid>
              <Grid.Column floated="left" width={8}>
                <span>{degree.name}</span>
              </Grid.Column>
              <Grid.Column floated="right" width={8} textAlign="right">
                <span>115 of 120 hours</span>
              </Grid.Column>
            </Grid>
          </Header>
          <Segment attached="bottom">
            <DegreeRequirementGroup key={degree.id} requirements={topLevelRequirements} />
          </Segment>
        </React.Fragment>
      )
    })
  }
  /**
   *
   */
  render() {
    if (this.props.loading)
      return (
        <React.Fragment>
          <Header attached="top">Degree Requirements</Header>
          <Segment attached="bottom">
            <h4>Select courses to fulfill the following requirements:</h4>
            <ContentLoading />
          </Segment>
        </React.Fragment>
      )
    return this.renderDegreeProgramBlocks(this.props.degreePrograms)
  }
}
export default DegreeRequirements
