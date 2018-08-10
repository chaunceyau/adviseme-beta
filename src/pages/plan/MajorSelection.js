import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Segment, Dropdown, Button, Grid, Header } from 'semantic-ui-react'
//
import { toTitleCase, replaceUnderscoreWithSpace } from '../../util/Utilities'
class MajorSelection extends Component {
  componentDidMount() {
    // this.props.setDegreePrograms([])
  }
  render() {
    const userDegreePrograms = this.props.degreePrograms
    return (
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
          if (degreePrograms)
            return (
              <React.Fragment>
                <Header as={'h3'} attached="top">
                  Select Degree Program(s)
                </Header>
                <Segment attached="bottom">
                  <Header attached="top">Majors</Header>
                  <Segment attached="bottom">
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
                  </Segment>
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
          return null
        }}
      </Query>
    )
  }
}

export default MajorSelection
