import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class DegreeRequirementGroupSegment extends Component {
  render() {
    // console.log(this.props)
    const { id, degreeRequirementGroupName } = this.props.requirementGroup
    return <Segment key={id}>{degreeRequirementGroupName}</Segment>
  }
}
