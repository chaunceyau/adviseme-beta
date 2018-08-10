import React, { Component } from 'react'

import { Segment, Header, Button, Modal, Popup } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { GET_COURSE_OPTIONS_FOR_REQUIREMENT } from '../../graphql/queries'
import ContentLoading from '../ContentLoading'
import { Redirect } from 'react-router-dom'
import { store } from '../../store'
import { addCourseToPlan } from '../../actions'

/**
 * View containing all of the course options for an individual requirement
 */

class CourseOptions extends Component {
  /**
   *
   */
  render() {
    if (!this.props.location.state || !this.props.location.state.requirementGroupID) return <Redirect to="/plan/requirements" />
    return (
      <Query query={GET_COURSE_OPTIONS_FOR_REQUIREMENT} variables={{ id: this.props.location.state.requirementGroupID }}>
        {({ loading, error, data: { degreeProgramRequirement } }) => {
          if (loading) return <ContentLoading />
          if (error) return <span>error</span>
          if (degreeProgramRequirement) {
            const { name, courseOptions } = degreeProgramRequirement
            // if no options exist, inform user
            if (!courseOptions.length)
              return (
                <Segment>
                  <b>{name}</b> course options have not yet been added.
                </Segment>
              )

            // if options exist, group them by department
            const groupedCourseOptions = courseOptions.reduce((acc, val) => {
              acc[val.department.name] = acc[val.department.name] || []
              acc[val.department.name].push(val)
              return acc
            }, {})

            // render options
            return (
              <Segment>
                Course Options for&nbsp;
                <b>{name}</b>
                <br />
                {Object.entries(groupedCourseOptions).map(entry => (
                  <CourseCategory key={entry[0]} entry={entry} currentStudentID={'0'} />
                ))}
              </Segment>
            )
          }
        }}
      </Query>
    )
  }
}

class CourseCategory extends Component {
  state = {
    redirect: false
  }

  render() {
    const { entry } = this.props
    return (
      <React.Fragment>
        <Header as="h5" attached="top">
          {entry[0]}
        </Header>
        <Segment attached>
          {entry[1].map(course => {
            return <Course course={course} key={course.id} />
          })}
        </Segment>
      </React.Fragment>
    )
  }
}

class Course extends Component {
  state = {
    open: false,
    redirect: false
  }

  handleClick = id => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: !this.state.open })

  render() {
    const { id, number, name, description, department } = this.props.course
    if (this.state.redirect) return <Redirect to="/plan/requirements/" />

    return (
      <React.Fragment>
        <Popup
          trigger={
            <Button key={id + 'btn'} onClick={() => this.handleClick(id)}>
              {department.name} {number}
            </Button>
          }
          content={name}
        />
        <Modal size={'small'} key={id} onClose={this.handleClose} open={this.state.open}>
          <Modal.Header>
            {department.name} {number} {name}
          </Modal.Header>
          <Modal.Content>{description}</Modal.Content>

          <Modal.Actions>
            <Button onClick={this.handleClose}>Close</Button>
            <Button
              positive
              onClick={() => {
                store.dispatch(addCourseToPlan(this.props.course))
                this.setState({ redirect: true, open: false })
              }}
            >
              Add Course
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    )
  }
}

export default CourseOptions
//
