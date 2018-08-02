import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import DegreeRequirementGroup from './DegreeRequirement'
import DegreeRequirementCategoryGroup from './DegreeRequirementCategory'

//

class TopLevelDegreeRequirements extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    return (
      <Accordion fluid styled>
        {this.props.requirements.map(requirements => {
          console.log(requirements)
          return requirements.map(req => {
            console.log(req)
            if (Array.isArray(req.degreeProgramRequirementOptions) && req.degreeProgramRequirementOptions.length) {
              console.log('yes')
              return <DegreeRequirementCategoryGroup requirements={req.degreeProgramRequirementOptions} />
            } else {
              console.log('no')
              return <DegreeRequirementGroup requirements={req.courseOptions} />
            }
          })
        })}
      </Accordion>
    )
  }

  OLD_render() {
    const { activeIndex } = this.state
    let index = -1
    return (
      <Accordion fluid styled>
        {this.props.requirements.map(requirement => {
          console.log(requirement)
          index++
          // requirements containing subreqs -> renders accordion
          let categoryRequirements = []
          // requirements with no subreqs -> only renders segment
          let individualRequirements = []

          /**
           * Map the subrequirements to their corresponding arrays
           */
          requirement.degreeProgramRequirementOptions.map(req => {
            if (Array.isArray(req.degreeProgramRequirementOptions)) {
              // return an accordion
              categoryRequirements.push(req)
              // return <DegreeRequirementCategory requirements={req} />;
            } else {
              individualRequirements.push(req)
            }
            // return <DegreeRequirement requirement={req} />;
          })
          return [
            <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
              <Icon name="dropdown" />
              {requirement.name}
            </Accordion.Title>,
            <Accordion.Content active={activeIndex === index}>
              {// make sure that requirements exists before rendering
              // didn't fulllllly test -> might cause error because of ternary
              individualRequirements.length > 0 ? <DegreeRequirementGroup requirements={individualRequirements} /> : null}
              {// make sure that category exists before rendering
              categoryRequirements.length > 0 ? <DegreeRequirementCategoryGroup requirements={categoryRequirements} /> : null}
            </Accordion.Content>
          ]
        })}
      </Accordion>
    )
  }
}

export default TopLevelDegreeRequirements
