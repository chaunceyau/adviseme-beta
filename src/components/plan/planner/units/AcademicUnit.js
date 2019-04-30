import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'

//
import PlannerCourse from '../sidebar/PlannerCourse'
import { replaceUnderscoreWithSpace } from '../../../../util/Utilities'
import { ItemTypes } from '../../../../util/Constants'

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const academicUnitTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    // const item = monitor.getItem()

    const { prerequisiteGroups } = monitor.getItem()

    if (Array.isArray(prerequisiteGroups) && prerequisiteGroups.length > 0) {
      const prereqs = prerequisiteGroups.map(group => {
        let course_ids = []
        //
        const { courseOptions, prerequisiteGroupOptions } = group
        //
        courseOptions.map(course => course_ids.push(course.id))
        prerequisiteGroupOptions.map(group => {})
        //
        if (prerequisiteGroupOptions.length > 0) {
        }
      })
    }
    // console.log(props)
    // console.log('dropPROPS : ' + JSON.stringify(props))
    return true
  },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentWillReceiveProps() to handle enter/leave.
    // You will receive hover() even for items for which canDrop() is false
    // const canDrop = monitor.canDrop()
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return
    }
    // Obtain the dragged item
    // const item = monitor.getItem()
    // if (props.courses.some(({ id }) => id === item.id)) console.log('already here')

    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position)

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true, unit: props.name }
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
 * Object: Handles an individual academic unit and the courses pertaining to the unit
 */
class AcademicUnit extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.isOver && nextProps.isOver) {
    }

    if (this.props.isOver && !nextProps.isOver) {
    }

    if (this.props.isOverCurrent && !nextProps.isOverCurrent) {
    }
  }

  render() {
    const { isOver, connectDropTarget } = this.props
    const { name, courses } = this.props
    return (
      <Card fluid ref={instance => connectDropTarget(findDOMNode(instance))}>
        <Card.Content>
          <Card.Header>{replaceUnderscoreWithSpace(name)}</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflow: 'auto', backgroundColor: isOver ? '#51288880' : 'white' }}>
          {courses.map(course => (
            <PlannerCourse key={course.id} course={course} unit={name} />
          ))}
          {isOver ? <div style={{ height: 75 }} /> : null}
        </Card.Content>
      </Card>
    )
  }
}

export default DropTarget(ItemTypes.COURSE_DND, academicUnitTarget, collect)(AcademicUnit)
