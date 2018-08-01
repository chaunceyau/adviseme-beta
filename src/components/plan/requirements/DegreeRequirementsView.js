import React, { Component } from 'react'

//
import { degreeRequirements } from '../../../api/api'
import { Segment } from 'semantic-ui-react'
import TopLevelDegreeRequirements from './TopLevelDegreeRequirements'
import { GET_STUDENT_DEGREE_REQUIREMENTS } from '../../../graphql/queries'
import { Query } from 'react-apollo'

class DegreeRequirementsView extends Component {
  /**
   *
   */
  renderTopLevelDegreeRequirementCategories(degreePrograms) {
    console.log(degreePrograms)
    var topLevelRequirements = []
    degreePrograms.map(degree => {
      console.log(degree)

      topLevelRequirements.push(degree.degreeProgramRequirements)
    })

    return <TopLevelDegreeRequirements requirements={topLevelRequirements} />
  }
  /**
   *
   */
  old_renderTopLevelDegreeRequirementCategories() {
    var topLevelRequirements = []

    degreeRequirements.map(req => {
      topLevelRequirements.push(req)
    })

    return <TopLevelDegreeRequirements requirements={topLevelRequirements} />
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
                {this.renderTopLevelDegreeRequirementCategories(data.User.degreePrograms)}
              </React.Fragment>
            )
        }}
      </Query>
    )
  }
}
export default DegreeRequirementsView
