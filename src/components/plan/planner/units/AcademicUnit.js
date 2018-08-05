import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PlannerCourse from '../sidebar/PlannerCourse'

/**
 * Object: Handles an individual academic unit and the courses pertaining to the unit
 */
class AcademicUnit extends Component {
  render() {
    const { name, courses } = this.props
    const cleanedName = name.replace(/[_-]/g, ' ')
    return (
      <Card>
        <Card.Content>
          <Card.Header>{cleanedName}</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflow: 'auto' }}>
          {courses.map(course => <PlannerCourse key={course.id} name={course.name} />)}
        </Card.Content>
      </Card>
    )
  }
}

export default AcademicUnit
