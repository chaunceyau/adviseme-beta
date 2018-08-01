import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PlannerCourse from '../sidebar/PlannerCourse'

/**
 * Object: Handles an individual academic unit and the courses pertaining to the unit
 */
class AcademicUnit extends Component {
  render() {
    return (
      <Card style={{ maxHeight: '43.5vh' }}>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflow: 'auto' }}>
          {this.props.courses.map(course => <PlannerCourse key={course.id} name={course.name} />)}
        </Card.Content>
      </Card>
    )
  }
}

export default AcademicUnit
