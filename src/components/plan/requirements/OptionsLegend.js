import React, { Component } from 'react'
import { Segment, Card, Grid, Button, Label, Icon } from 'semantic-ui-react'

export default class OptionsLegend extends Component {
  render() {
    return (
      <Card fluid color="violet">
        <Label attached="top" color="violet">
          Legend
        </Label>
        <Card.Content>
          <Grid centered>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Button style={{ marginRight: 15 }}>Course Fills Requirement</Button>
                <Button style={{ marginRight: 15 }} as="div" labelPosition="right">
                  <Button icon>
                    <Icon name="tasks" />
                  </Button>
                  <Label as="a" basic>
                    Course Fills Multiple Requirements
                  </Label>
                </Button>
                <Button as="div" labelPosition="right" style={{ marginRight: 15 }}>
                  <Button icon>
                    <Icon name="star" />
                  </Button>
                  <Label as="a" basic>
                    Personalized Course Recommendation
                  </Label>
                </Button>
                <Button color="violet">Course Currently In Plan</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}
