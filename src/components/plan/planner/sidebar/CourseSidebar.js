import React, { Component } from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'

//
import PlannerCourse from './PlannerCourse'

/**
 * Object: Left-hand course sidebar containing all courses student selected from requirements page
 */
class CourseSidebar extends Component {
  /**
   *
   */
  renderSidebarHeader() {
    return (
      <Grid>
        <Grid.Row columns={2} fluid="true">
          <Grid.Column width={13}>Courses</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="filter" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  /**
   *
   */
  renderSidebarCourses() {
    // TODO: Implement logic
    return this.props.sidebarCourses.map(course => {
      const { id, name } = course
      return <PlannerCourse key={id} name={name} />
    })
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{this.renderSidebarHeader()}</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflow: 'auto', maxHeight: '50vh' }}>{this.renderSidebarCourses()}</Card.Content>
      </Card>
    )
  }
}

export default CourseSidebar
