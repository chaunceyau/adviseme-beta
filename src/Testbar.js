import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { addCourseToPlanner, moveCourseToAcademicUnit, addAcademicUnit } from './actions'
import store from './store'

export default class Testbar extends Component {
  render() {
    return (
      <Segment>
        <Button onClick={() => store.dispatch(addCourseToPlanner(12, 'test ME'))}>addCourseToPlanner</Button>
        <Button onClick={() => store.dispatch(moveCourseToAcademicUnit(1932, 'wow', 1))}>moveCourseToAcademicUnit</Button>
        <Button onClick={() => store.dispatch(addAcademicUnit(3242, '3100'))}>addAcademicUnit</Button>
      </Segment>
    )
  }
}
