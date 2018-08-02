import React, { Component } from 'react'
import { Accordion, Icon } from '../../../../node_modules/semantic-ui-react'
import DegreeRequirementGroupSegment from './DegreeRequirementGroupSegment'

export default class DegreeRequirementGroupAccordion extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? null : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    console.log(this.props.requirementGroup)
    console.log('render')
    return null
  }
  render2() {
    // console.log('ll', this.props.requirementGroup)
    const { activeIndex } = this.state
    const { id, degreeRequirementGroupName } = this.props.requirementGroup
    return (
      <Accordion fluid styled>
        {/* <span>{this.props.requirements}</span> */}
        <Accordion.Title active={activeIndex === id} index={id} onClick={this.handleClick}>
          <Icon name="dropdown" />
          {degreeRequirementGroupName}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === id}>
          {this.props.requirementGroup.degreeProgramRequirementOptions.map(subReqs => {
            if (Array.isArray(subReqs.degreeProgramRequirementOptions) && subReqs.degreeProgramRequirementOptions.length)
              return <DegreeRequirementGroupAccordion requirementGroup={subReqs} />
            else return <DegreeRequirementGroupSegment requirementGroup={subReqs} />
          })}
        </Accordion.Content>
        {/* {this.props.requirements.map(requirement => <div>{requirement.degreeRequirementGroupName}</div>)} */}
      </Accordion>
    )
  }
}
