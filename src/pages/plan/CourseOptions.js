import React, { Component } from 'react'
import _ from 'lodash'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import { Segment, Header, Button, Modal, Popup, Grid, Label, Icon } from 'semantic-ui-react'

//
import { GET_COURSE_OPTIONS_FOR_REQUIREMENT } from '../../graphql/queries'
import ContentLoading from '../ContentLoading'
import { isCourseInPlan, replaceUnderscoreWithSpace } from '../../util/Utilities'

/**
 * View containing all of the course options for an individual requirement
 */

class CourseOptions extends Component {
  /**
   *
   */
  render() {
    if (!this.props.location.state || !this.props.location.state.requirementGroupID) return <Redirect to="/plan/requirements" />
    //
    return (
      <Query query={GET_COURSE_OPTIONS_FOR_REQUIREMENT} variables={{ id: this.props.location.state.requirementGroupID }}>
        {({ loading, error, data }) => {
          if (loading) return <ContentLoading />
          if (error) return <span>error</span>
          if (data) {
            const { degreeProgramRequirement } = data
            const { name, courseOptions, logicalOperator, numberOfX } = degreeProgramRequirement
            // if no options exist, inform user
            if (!courseOptions.length)
              return (
                <Segment>
                  <b>{name}</b> course options have not yet been added.
                </Segment>
              )

            // if options exist, group them by group

            const sortedCourseOptions = _.chain(courseOptions)
              .groupBy('naming.longName')
              .map((key, value) => {
                return { group: value, courses: key }
              })
              .value()
              .sort((a, b) => a.group.localeCompare(b.group))

            // render options
            return (
              <React.Fragment>
                <Header attached="top">
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <span>{name}</span>
                      </Grid.Column>
                      <Grid.Column textAlign="right">
                        <span style={{ fontWeight: 400 }}>
                          Select&nbsp;
                          <b>
                            {numberOfX} {logicalOperator === 'X_OF' ? 'course' : 'credit hour'}
                          </b>
                          {numberOfX > 1 ? 's' : null} from the list below.
                        </span>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Header>
                <Segment attached="bottom">
                  {logicalOperator === 'X_HOURS_OF' ? '' : null}
                  {sortedCourseOptions.map(entry => {
                    return (
                      <CourseCategory
                        key={entry.group}
                        name={entry.group}
                        courses={entry.courses}
                        addCourseToUnplannedCourses={this.props.addCourseToUnplannedCourses}
                        removeCourseFromPlan={this.props.removeCourseFromPlan}
                      />
                    )
                  })}
                </Segment>
              </React.Fragment>
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
    const { name, courses } = this.props
    return (
      <React.Fragment>
        <Header as="h5" attached="top">
          {replaceUnderscoreWithSpace(name)}
        </Header>
        <Segment attached="bottom">
          {courses.map(course => {
            return (
              <Course
                course={course}
                key={course.id}
                addCourseToUnplannedCourses={this.props.addCourseToUnplannedCourses}
                removeCourseFromPlan={this.props.removeCourseFromPlan}
              />
            )
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

  handleClick = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    const { id, number, name, description, naming, credits, degreeProgramRequirements } = this.props.course
    const multiReqBool = degreeProgramRequirements.length > 1
    if (this.state.redirect) return <Redirect to="/plan/requirements/" />

    const courseInPlan = isCourseInPlan(this.props.course)
    return (
      <React.Fragment>
        <Popup
          trigger={
            multiReqBool ? (
              <Button
                as="div"
                labelPosition="right"
                onClick={() => this.handleClick(id)}
                style={{ marginBottom: 10, marginRight: 10 }}
              >
                <Button icon>
                  <Icon name="star" />
                </Button>
                <Label as="a" basic>
                  {naming.shortName} {number}
                </Label>
              </Button>
            ) : (
              <Button as="div" onClick={() => this.handleClick(id)} style={{ marginBottom: 10, marginRight: 10 }}>
                {naming.shortName} {number}
              </Button>
            )
          }
          content={name}
        />
        <Modal size={'small'} key={id} onClose={this.handleClose} open={this.state.open}>
          <Modal.Header>
            {naming.shortName} {number}: {name}
          </Modal.Header>
          <Modal.Content>
            <b>Description:</b>
            &nbsp;
            {description}
            <br />
            <b>Credit Hours:</b>
            &nbsp;
            {credits}
            <br />
            <b>Degree Requirements:</b>
            &nbsp;
            {degreeProgramRequirements.map(({ name }) => (
              <span key={name}>{name} </span>
            ))}
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={this.handleClose}>Close</Button>
            {courseInPlan ? (
              <Button
                negative
                onClick={() => {
                  this.props.removeCourseFromPlan(this.props.course)
                  this.setState({ redirect: true, open: false })
                }}
              >
                Remove Course
              </Button>
            ) : (
              <Button
                positive
                onClick={() => {
                  this.props.addCourseToUnplannedCourses(this.props.course)
                  this.setState({ redirect: true, open: false })
                }}
              >
                Add Course
              </Button>
            )}
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    )
  }
}

export default CourseOptions
//
