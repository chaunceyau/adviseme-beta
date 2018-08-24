import React, { Component } from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import _ from 'lodash'
import { DropTarget } from 'react-dnd'
//
import PlannerCourse from './PlannerCourse'
import { ItemTypes } from '../../../../util/Constants'

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const sidebarTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem()
    if (Array.isArray(props.courses) && props.courses.some(course => course.id === item.id)) {
      console.log('IDSEQUAL')
      return false
    }
    return true
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return
    }

    // Obtain the dragged item
    // const item = monitor.getItem()

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { unit: 'SIDEBAR' }
  }
}

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}

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
      const { id } = course
      return <PlannerCourse key={id} course={course} unit={'SIDEBAR'} />
    })
  }

  render() {
    const { isOver, connectDropTarget } = this.props
    return (
      <Card fluid ref={instance => connectDropTarget(findDOMNode(instance))} testpro="lds">
        <Card.Content>
          <Card.Header>{this.renderSidebarHeader()}</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflow: 'auto', maxHeight: '60vh', backgroundColor: isOver ? '#51288880' : 'white' }}>
          {this.renderSidebarCourses(this.props.unplannedCourses)}
          {isOver ? <div style={{ height: 75 }} /> : null}
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = store => ({
  unplannedCourses: store.user.unplannedCourses
})

export default _.flowRight(
  DropTarget(ItemTypes.COURSE_DND, sidebarTarget, collect),
  connect(mapStateToProps)
)(CourseSidebar)
