import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Segment, Header, Button, Modal, Popup } from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import {
  GET_COURSE_OPTIONS_FOR_REQUIREMENT,
  STUDENT_ID,
  ADD_COURSE_TO_USER_PLAN,
  GET_STUDENT_UNPLANNED_COURSES
} from '../../graphql/queries'
import ContentLoading from '../ContentLoading'
import { Redirect } from 'react-router-dom'

/**
 * View containing all of the course options for an individual requirement
 */

class CourseOptions extends Component {
  /**
   *
   */
  render() {
    return (
      <Query
        query={GET_COURSE_OPTIONS_FOR_REQUIREMENT}
        variables={{ requirementGroupID: this.props.location.state.requirementGroupID }}
      >
        {({ loading, error, data: { DegreeProgramRequirement } }) => {
          if (loading) return <ContentLoading />
          if (error) return <span>error</span>
          if (DegreeProgramRequirement) {
            const { degreeRequirementGroupName, courseOptions } = DegreeProgramRequirement
            const groupedCourseOptions = courseOptions.reduce((acc, val) => {
              acc[val.department.name] = acc[val.department.name] || []
              acc[val.department.name].push(val)
              return acc
            }, {})
            return (
              <Segment>
                Course Options for&nbsp;
                <b>{degreeRequirementGroupName}</b>
                <br />
                {Object.entries(groupedCourseOptions).map(entry => (
                  <CourseOption key={entry[0]} entry={entry} currentStudentID={this.props.currentStudentID} />
                ))}
              </Segment>
            )
          }
        }}
      </Query>
    )
  }
}

class CourseOption extends Component {
  state = {
    openID: -1,
    redirect: false
  }

  handleClick = id => this.setState({ openID: id })

  handleClose = () => this.setState({ openID: -1 })

  render() {
    const { entry } = this.props
    if (this.state.redirect) return <Redirect to="/plan/requirements/" />
    return (
      <React.Fragment>
        <Header as="h5" attached="top">
          {entry[0]}
        </Header>
        <Segment attached>
          {entry[1].map(course => {
            const { id, number, name, description, department } = course
            return (
              <React.Fragment key={id}>
                <Popup
                  trigger={
                    <Button key={id + 'btn'} onClick={() => this.handleClick(id)}>
                      {department.name} {number}
                    </Button>
                  }
                  content={name}
                />
                <Modal size={'small'} key={id} onClose={this.handleClose} open={this.state.openID === id}>
                  <Modal.Header>
                    {department.name} {number} {name}
                  </Modal.Header>
                  <Modal.Content>{description}</Modal.Content>

                  <Modal.Actions>
                    <Button onClick={this.handleClose}>Close</Button>
                    <Mutation
                      mutation={ADD_COURSE_TO_USER_PLAN}
                      refetchQueries={[{ query: GET_STUDENT_UNPLANNED_COURSES }]}
                      variables={{ courseID: id, userID: STUDENT_ID }}
                    >
                      {(addCourseToPlan, { loading, data }) => {
                        return (
                          <Button
                            positive
                            loading={loading}
                            onClick={() =>
                              addCourseToPlan()
                                .then(data => {
                                  this.setState({ redirect: true, openID: -1 })
                                })
                                .catch(err => console.log(err, 'rr'))
                            }
                          >
                            Add Course
                          </Button>
                        )
                      }}
                    </Mutation>
                  </Modal.Actions>
                </Modal>
              </React.Fragment>
            )
          })}
        </Segment>
      </React.Fragment>
    )
  }
}

// redux

const mapStateToProps = store => {
  return {
    currentStudentID: store.user.currentStudent.id
  }
}
export default connect(mapStateToProps)(CourseOptions)
//
