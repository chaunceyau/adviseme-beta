import React, { Component } from 'react'

import { toTitleCase, replaceUnderscoreWithSpace } from '../../../../util/Utilities'

import { degreeRequirements } from '../../../../api/api'
import { Segment, Header, Button } from 'semantic-ui-react'

/**
 * View containing all of the course options for an individual requirement
 */

class CourseOptionsView extends Component {
  /**
   *
   * @param {*} args
   */
  getOptionsByRequirement(args) {
    //console.log(args)
    // TODO: must be a way to do this recursively..
    let courseOptions = []
    // top-level degree requirements
    degreeRequirements.filter(requirement0 => {
      //console.log('req0name', requirement0.name)
      //console.log('args0', args[0])
      // check if first arg matches top level requirement
      if (requirement0.name === args[0]) {
        //console.log('TWO')
        // if matches, filter through subreqs to find matching name
        requirement0.requirements.filter(requirement1 => {
          //console.log('THREE')
          // if name matches -> proceed through loop
          if (requirement1.name === args[1]) {
            //console.log('FOUR')
            // if the requirement has subreqs -> find the matching subreq
            if (Array.isArray(requirement1.requirements)) {
              //console.log('FIVE')
              // filter through the subreqs
              requirement1.requirements.filter(requirement2 => {
                //console.log('SIX')
                // if name matches -> proceed through loop
                if (requirement2.name === args[2]) {
                  // set course options variable
                  // TODO: CHECK ATLEAST ONE MORE LEVEL or RECURSION
                  courseOptions = requirement2.options
                }
              })
            } else {
              // if the requirement does not have subreqs -> we are at course options level
              courseOptions = requirement1.options
            }
          }
        })
      }
    })
    // If course options has no options.. probably in bad location
    if (courseOptions.length === 0) return 'No course options found.. likely an error. Check your url or contact your advisor'
    // return our array
    return courseOptions
  }

  /**
   *
   */
  render() {
    //console.log('here')
    let requirementNames = []

    Object.keys(this.props.match.params).map(key => {
      if (this.props.match.params[key]) {
        requirementNames.push(toTitleCase(replaceUnderscoreWithSpace(this.props.match.params[key])))
      }
    })
    let courseOptions = this.getOptionsByRequirement(requirementNames)

    return (
      <Segment>
        Course Options for&nbsp;
        <b>{requirementNames.toString()}</b>
        <br />
        {Array.isArray(courseOptions)
          ? courseOptions.map(category => {
              return (
                <React.Fragment>
                  <Header as="h5" attached="top">
                    {category.category}
                  </Header>
                  <Segment attached>
                    {category.courses.map(option => <Button style={{ marginBottom: '0.5em' }}>{option.name}</Button>)}
                  </Segment>
                </React.Fragment>
              )
            })
          : null}
      </Segment>
    )
  }
}

export default CourseOptionsView
