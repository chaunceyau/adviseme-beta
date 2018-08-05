import React, { Component } from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'

//

class PlannerCourse extends Component {
  render() {
    return (
      <Card key={this.props.name} fluid style={{ minHeight: 35 }}>
        <Card.Content>
          <Grid columns="equal">
            <Grid.Column width={10}>
              <span>{this.props.name}</span>
            </Grid.Column>
            <Grid.Column textAlign={'right'}>
              <Button onClick={() => {}}>test</Button>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

export default PlannerCourse
