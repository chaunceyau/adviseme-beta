import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'

// const majors = ['finance', '1', '2', '3', '12', '23', '34', '15', '25', '35', '125', '235', '334']

class MajorSelection extends Component {
  render() {
    return (
      <Segment style={{ height: '70vh' }}>
        <Grid>
          <Grid.Row>
            <Grid.Column>Select Your Degree Program</Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ overflowX: 'auto', width: 500, maxHeight:100 }}>
            {/* {majors.map(major => (
              <Grid.Column key={major} style={{ width: 200, height:10 }}>
                <Card>
                  <Card.Content>{major}</Card.Content>
                </Card>
              </Grid.Column>
            ))} */}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default MajorSelection
