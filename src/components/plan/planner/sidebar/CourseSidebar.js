import React, { Component } from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'

//
import PlannerCourse from './PlannerCourse'
import { GET_STUDENT_UNPLANNED_COURSES } from '../../../../graphql/queries'
import { Query } from '../../../../../node_modules/react-apollo'
import ContentLoading from '../../../../pages/ContentLoading'

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
        <Card.Content style={{ overflow: 'auto', maxHeight: '60vh' }}>
          <Query query={GET_STUDENT_UNPLANNED_COURSES}>
            {({ loading, error, data }) => {
              if (loading) return <ContentLoading />
              if (error) return <span>error</span>
              if (data) {
                const { unplannedCourses } = data.User
                if (!unplannedCourses.length) return <span>No more courses to plan!</span>
                return this.renderSidebarCourses(unplannedCourses)
              }
            }}
          </Query>
        </Card.Content>
      </Card>
    )
  }
}

export default CourseSidebar
