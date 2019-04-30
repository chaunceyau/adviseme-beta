import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Segment, Dropdown, Button, Grid, Header } from 'semantic-ui-react'
//
import { toTitleCase, replaceUnderscoreWithSpace } from '../../util/Utilities'
import ContentLoading from '../ContentLoading'
class DegreeSelection extends Component {
  componentDidMount() {
    // this.props.setDegreePrograms([])
  }

  renderMajorOptions(userDegreePrograms) {
    return (
      <React.Fragment>
        <Header attached="top">Majors</Header>
        <Segment attached="bottom">
          <Query
            query={gql`
              {
                degreePrograms {
                  id
                  name
                }
              }
            `}
          >
            {({ loading, error, data: { degreePrograms } }) => {
              if (loading) return <ContentLoading />
              if (degreePrograms)
                return (
                  <Dropdown
                    placeholder="Select Major(s)"
                    fluid
                    search
                    defaultValue={userDegreePrograms}
                    multiple
                    closeOnChange
                    selection
                    options={degreePrograms.map(({ name: text, id: value, ...rest }) => {
                      text = toTitleCase(replaceUnderscoreWithSpace(text))
                      return { text, value, ...rest }
                    })}
                    onChange={(e, data) => {
                      this.props.setDegreePrograms(data.value)
                    }}
                  />
                )
            }}
          </Query>
        </Segment>
      </React.Fragment>
    )
  }

  renderMinorOptions() {
    return (
      <React.Fragment>
        <Header attached="top">Minors</Header>
        <Segment attached="bottom">
          <Dropdown
            placeholder="Select Minor(s)"
            fluid
            search
            multiple
            closeOnChange
            selection
            options={[{ id: 1, key: 1, name: 'test' }]}
          />
        </Segment>
      </React.Fragment>
    )
  }

  renderCertificateOptions() {
    return (
      <React.Fragment>
        <Header attached="top">Certificate Programs</Header>
        <Segment attached="bottom">
          <Dropdown
            placeholder="Select Certificate Program(s)"
            fluid
            search
            multiple
            closeOnChange
            selection
            options={[{ id: 1, key: 1, name: 'test' }]}
          />
        </Segment>
      </React.Fragment>
    )
  }

  render() {
    const userDegreePrograms = this.props.degreePrograms
    return (
      <React.Fragment>
        <Header as={'h3'} attached="top">
          Select Degree Program(s)
        </Header>
        <Segment attached="bottom">
          {this.renderMajorOptions(userDegreePrograms)}
          {this.renderMinorOptions()}
          {this.renderCertificateOptions()}
          <Grid style={{ marginTop: '0.75rem' }}>
            <Grid.Row>
              <Grid.Column textAlign="right">
                <Button
                  disabled={userDegreePrograms.length === 0}
                  positive={userDegreePrograms.length > 0}
                  onClick={() => this.props.history.push('/plan/requirements')}
                >
                  Continue
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    )
  }
}

export default DegreeSelection
