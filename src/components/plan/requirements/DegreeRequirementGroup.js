import React, { Component } from 'react'
import { Accordion, Icon, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

class DegreeRequirementGroup extends Component {
  // TODO: NOTE: THE CHANGE IN DEGREE REQS QUERY MAY LEAD TO LONG RENDERS FOR LONG LISTS OF COURSES
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? null : index

    this.setState({ activeIndex: newIndex })
  }

  isRequirementComplete(requirement) {
    const plannerCourseIDs = _.union(
      this.props.academicUnits.reduce((acc, { course }) => {
        for (const c of course) {
          acc.push(c.id)
        }
        return acc
      }, []),
      this.props.unplannedCourses.reduce((acc, { id }) => {
        acc.push(id)
        return acc
      }, [])
    )
    const requirementCourseIDs = requirement.courseOptions.reduce((acc, { id }) => {
      acc.push(id)
      return acc
    }, [])
    return _.intersection(plannerCourseIDs, requirementCourseIDs).length > 0
  }

  render() {
    if (!(Array.isArray(this.props.requirements) && this.props.requirements.length))
      return <span>Degree requirements have no yet been uploaded for this requirement.</span>
    // make an array to map requirements with only categorical options from props
    let accordionRequirements = []
    // make an array to map requirements with only course options from props
    let segmentRequirements = []

    // map the requirements
    this.props.requirements.forEach(requirement => {
      const { degreeProgramRequirementOptions } = requirement
      //   TODO: MAKE THIS CHECK IF COURSE OPTIONS IS AVAILABLE, IF NOT... RENDER ERROR. below statement should do
      //   } else if (Array.isArray(courseOptions) && courseOptions.length) {
      if (Array.isArray(degreeProgramRequirementOptions) && degreeProgramRequirementOptions.length)
        accordionRequirements.push(requirement)
      else segmentRequirements.push(requirement)
    })

    // check if props passed are accordion style requirements (categorical)
    if (Array.isArray(accordionRequirements) && accordionRequirements.length) {
      return (
        <React.Fragment>
          <Accordion key={accordionRequirements[0].id} styled fluid>
            {accordionRequirements.map(requirement => {
              const { id, name } = requirement
              const { activeIndex } = this.state
              return [
                <Accordion.Title key={id} active={activeIndex === id} index={id} onClick={this.handleClick}>
                  <Grid columns={2}>
                    <Grid.Column>
                      <Icon name="dropdown" />
                      {name}
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                      {0 === 1 ? <Icon name="check circle" color="green" /> : <Icon name="times circle" color="red" />}
                    </Grid.Column>
                  </Grid>
                </Accordion.Title>,
                <Accordion.Content key={id + 'content'} active={activeIndex === id}>
                  <DegreeRequirementGroup
                    key={id}
                    requirements={requirement.degreeProgramRequirementOptions}
                    academicUnits={this.props.academicUnits}
                    unplannedCourses={this.props.unplannedCourses}
                  />
                </Accordion.Content>
              ]
            })}
          </Accordion>
          {Array.isArray(segmentRequirements) && segmentRequirements.length ? (
            // the key for this accordion should likely be replaced. Will probably work for now, but not best practice?
            <DegreeRequirementGroup
              key={segmentRequirements[0].id}
              requirements={segmentRequirements}
              unplannedCourses={this.props.unplannedCourses}
              academicUnits={this.props.academicUnits}
            />
          ) : null}
        </React.Fragment>
      )
    }

    if (Array.isArray(segmentRequirements) && segmentRequirements.length) {
      return (
        <Segment.Group>
          {segmentRequirements.map(requirement => {
            const { id, name } = requirement
            return (
              <Segment key={requirement.id}>
                <Grid columns={2}>
                  <Grid.Column>
                    <Link to={{ pathname: '/plan/requirements/options', state: { requirementGroupID: id } }}>{name}</Link>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    {this.isRequirementComplete(requirement) ? (
                      <Icon name="check circle" color="green" />
                    ) : (
                      <Icon name="times circle" color="red" />
                    )}
                  </Grid.Column>
                </Grid>
              </Segment>
            )
          })}
        </Segment.Group>
      )
    }
  }
}

const mapStateToProps = store => ({
  unplannedCourses: store.user.unplannedCourses,
  academicUnits: store.user.academicUnits
})

export default connect(mapStateToProps)(DegreeRequirementGroup)
