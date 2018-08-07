import React, { Component } from 'react'
import { Segment, Dropdown, Button, Grid } from 'semantic-ui-react'
import _ from 'lodash'
import { Query } from '../../../node_modules/react-apollo'
import gql from '../../../node_modules/graphql-tag'
import { toTitleCase, replaceUnderscoreWithSpace } from '../../util/Utilities'

class MajorSelection extends Component {
  state = {
    majorID: -1
  }
  render() {
    const { majorID } = this.state
    console.log('clicked', this.state)

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
              <Segment>
                <h3>Please select your major</h3>
                <Dropdown
                  placeholder="Select Major"
                  fluid
                  search
                  selection
                  options={degreePrograms.map(({ name: text, id: value, ...rest }) => {
                    text = toTitleCase(replaceUnderscoreWithSpace(text))
                    return { text, value, ...rest }
                  })}
                  onChange={(e, data) => {
                    this.setState({ majorID: data.value })
                  }}
                />
                <Grid style={{ marginTop: '1rem' }}>
                  <Grid.Row>
                    <Grid.Column textAlign="right">
                      <Button disabled={majorID === -1} positive={majorID !== -1} onClick={()=>{}}>
                        Continue
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            )
          return null
        }}
      </Query>
    )
  }
}

export default MajorSelection
