import React, { Component } from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
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
  renderSidebarCourses(courses) {
    // TODO: Implement logic
    if (!Array.isArray(courses)) return <span>No more courses to plan!</span>
    return courses.map(course => {
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
        <Card.Content style={{ overflow: 'auto', maxHeight: '60vh' }}>{this.renderSidebarCourses(this.props.unplannedCourses)}</Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = store => ({
  unplannedCourses: store.user.unplannedCourses
})

export default connect(mapStateToProps)(CourseSidebar)
