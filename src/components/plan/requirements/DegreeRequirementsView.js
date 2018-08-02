import React, { Component } from 'react'

//
import { GET_STUDENT_DEGREE_REQUIREMENTS } from '../../../graphql/queries'
import { Query } from 'react-apollo'
import { Accordion, Icon } from 'semantic-ui-react'
import DegreeRequirementGroupAccordion from './DegreeRequirementGroupAccordion'
import DegreeRequirementGroupSegment from './DegreeRequirementGroupSegment'
import DegreeRequirementGroup from './DegreeRequirementGroup'

class DegreeRequirementsView extends Component {
  /**
   *
   * @param {*} degreePrograms
   */
  renderDegreeProgramBlocks(degreePrograms) {
    // map through each degree program a student is in
    return degreePrograms.map(degree => {
      let topLevelRequirements = []

      // create the accordion then loop through requirements
      degree.degreeProgramRequirements.map(requirement => {
        topLevelRequirements.push(requirement)
      })
      console.log(degree.id, topLevelRequirements)
      return <DegreeRequirementGroup key={degree.id} requirements={topLevelRequirements} />
    })
  }
  /**
   *
   */
  render() {
    return (
      <Query query={GET_STUDENT_DEGREE_REQUIREMENTS}>
        {({ loading, error, data }) => {
          if (loading || error) return null
          if (data)
            return (
              <React.Fragment>
                <h4>Select courses to fulfill the following requirements:</h4>
                {this.renderDegreeProgramBlocks(data.User.degreePrograms)}
              </React.Fragment>
            )
        }}
      </Query>
    )
  }
}
export default DegreeRequirementsView
