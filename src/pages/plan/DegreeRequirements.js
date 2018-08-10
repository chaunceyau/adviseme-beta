import React, { Component } from 'react'
import { Header, Segment, Grid, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
//
import DegreeRequirementGroup from '../../components/plan/requirements/DegreeRequirementGroup'
import ContentLoading from '../ContentLoading'
import { GET_REQUIREMENTS_FOR_DEGREE } from '../../graphql/queries'
import { Query } from '../../../node_modules/react-apollo'

//
class DegreeRequirements extends Component {
  /**
   *
   * @param {*} degreePrograms
   */
  renderDegreeProgramBlocks(degreePrograms) {
    if (!degreePrograms) return <span>It seems like we've reached an error..</span>
    // map through each degree program a student is in

    return degreePrograms.map(degreeProgram => {
      return (
        <React.Fragment key={degreeProgram.id}>
          <Header attached="top">
            <Grid>
              <Grid.Column floated="left" width={8}>
                <span>{degreeProgram.name}</span>
              </Grid.Column>
              <Grid.Column floated="right" width={8} textAlign="right">
                <span>115 of 120 hours</span>
              </Grid.Column>
            </Grid>
          </Header>
          <Segment attached="bottom">
            <DegreeRequirementGroup key={degreeProgram.id} requirements={degreeProgram.degreeProgramRequirements} />
          </Segment>
        </React.Fragment>
      )
    })
  }

  renderNotification() {
    if (!this.props.notification) return null
    const { title, content, positive } = this.props.notification
    return (
      <Message positive={positive} negative={!positive} onDismiss={() => this.props.clearNotification()}>
        <Message.Header>{title}</Message.Header>
        <p>{content}</p>
      </Message>
    )
  }

  /**
   *
   */
  render() {
    if (!this.props.degreePrograms.length) return <Redirect to="/plan" />
    return (
      <Query query={GET_REQUIREMENTS_FOR_DEGREE} variables={{ ids: this.props.degreePrograms }}>
        {({ loading, error, data }) => {
          if (loading) return <ContentLoading />
          if (error) return <span>error</span>
          if (data) {
            return (
              <React.Fragment>
                {this.renderNotification()}
                {this.renderDegreeProgramBlocks(data.degreePrograms)}
              </React.Fragment>
            )
          }
        }}
      </Query>
    )
  }
}
export default DegreeRequirements
