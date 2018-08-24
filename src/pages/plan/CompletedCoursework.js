import React, { Component } from 'react'
import { Segment, Search } from 'semantic-ui-react'

export default class CompletedCoursework extends Component {
  render() {
    return (
      <Segment>
        <Search fluid input={{ fluid: true }} placeholder="Search Courses" />
      </Segment>
    )
  }
}
