import React, { Component } from 'react'
import { Accordion, Icon, Segment } from '../../../../node_modules/semantic-ui-react'

export default class DegreeRequirementGroup extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? null : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    if (!(Array.isArray(this.props.requirements) && this.props.requirements.length)) return <span>error</span>
    // make an array to map requirements with only categorical options from props
    let accordionRequirements = []
    // make an array to map requirements with only course options from props
    let segmentRequirements = []

    // map the requirements
    this.props.requirements.map(requirement => {
      const { degreeProgramRequirementOptions, courseOptions } = requirement
      //   TODO: MAKE THIS CHECK IF COURSE OPTIONS IS AVAILABLE, IF NOT... RENDER ERROR. below statement should do
      //   } else if (Array.isArray(courseOptions) && courseOptions.length) {
      if (Array.isArray(degreeProgramRequirementOptions) && degreeProgramRequirementOptions.length)
        accordionRequirements.push(requirement)
      else segmentRequirements.push(requirement)
    })

    // check if props passed are accordion style requirements (categorical)
    if (Array.isArray(accordionRequirements) && accordionRequirements.length)
      return [
        // the key for this accordion should likely be replaced. Will probably work for now, but not best practice?
        <Accordion key={accordionRequirements[0].id} styled fluid>
          {accordionRequirements.map(requirement => {
            const { id, degreeRequirementGroupName } = requirement
            const { activeIndex } = this.state
            return [
              <Accordion.Title key={id} active={activeIndex === id} index={id} onClick={this.handleClick}>
                <Icon name="dropdown" />
                {degreeRequirementGroupName}
              </Accordion.Title>,
              <Accordion.Content key={id + 'content'} active={activeIndex === id}>
                <DegreeRequirementGroup key={id} requirements={requirement.degreeProgramRequirementOptions} />
              </Accordion.Content>
            ]
          })}
        </Accordion>,
        Array.isArray(segmentRequirements) && segmentRequirements.length ? (
          // the key for this accordion should likely be replaced. Will probably work for now, but not best practice?
          <DegreeRequirementGroup key={segmentRequirements[0].id} requirements={segmentRequirements} />
        ) : null
      ]

    if (Array.isArray(segmentRequirements) && segmentRequirements.length) {
      return (
        <Segment.Group>
          {segmentRequirements.map(requirement => {
            const { degreeRequirementGroupName } = requirement
            return <Segment key={requirement.id}>{degreeRequirementGroupName}</Segment>
          })}
        </Segment.Group>
      )
    }
  }
}
