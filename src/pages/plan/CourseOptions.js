import React, { Component } from 'react'
import _ from 'lodash'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import { Segment, Header, Button, Modal, Popup, Grid, Label, Icon, Divider, Card } from 'semantic-ui-react'

//
import { GET_COURSE_OPTIONS_FOR_REQUIREMENT } from '../../graphql/queries'
import ContentLoading from '../ContentLoading'
import { isCourseInPlan, replaceUnderscoreWithSpace } from '../../util/Utilities'
import OptionsLegend from '../../components/plan/requirements/OptionsLegend'

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
                <OptionsLegend />

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
                            {numberOfX > 1 ? 's' : null}
                          </b>&nbsp;
                          from the available options below.
                        </span>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Header>
                <Segment attached="bottom">
                  {/* <OptionsLegend /> */}
                  {logicalOperator === 'X_HOURS_OF' ? '' : null}
                  {sortedCourseOptions.map(entry => {
                    return (
                      <CourseCategory
                        key={entry.group}
                        name={entry.group}
                        courses={entry.courses}
                        addCourseToUnplannedCourses={this.props.addCourseToUnplannedCourses}
                        removeCourseFromUnplannedCourses={this.props.removeCourseFromUnplannedCourses}
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
    const orderedCourses = courses.sort((a, b) => a.number - b.number)
    return (
      <React.Fragment>
        <Header as="h5" attached="top">
          {replaceUnderscoreWithSpace(name)}
        </Header>
        <Segment attached="bottom">
          {orderedCourses.map(course => {
            return (
              <Course
                course={course}
                key={course.id}
                addCourseToUnplannedCourses={this.props.addCourseToUnplannedCourses}
                removeCourseFromUnplannedCourses={this.props.removeCourseFromUnplannedCourses}
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
    // const strings = ['tasks', 'heart', 'trophy']
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
                  <Icon name="tasks" />
                </Button>
                <Label as="a" basic>
                  {/* {naming.shortName} {number} */}
                  {name}
                </Label>
              </Button>
            ) : (
              <Button
                as="div"
                // TODO: getting error in console b/c of no color: ''
                color={courseInPlan ? 'violet' : ''}
                onClick={() => this.handleClick(id)}
                style={{ marginBottom: 10, marginRight: 10 }}
              >
                {/* {naming.shortName} {number}  */}
                {name}
              </Button>
            )
          }
          content={naming.shortName + ' ' + number}
        />
        <Modal size={'small'} key={id} onClose={this.handleClose} open={this.state.open}>
          <Modal.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  {naming.shortName} {number}: {name}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Header>
          {/* <Modal.Content>
            <b>Description</b>
            <br />
            {description}
            <br />
            <Divider/>
            <b>Credit Hours</b>
            <br />
            {credits}
            <br />
            <Divider/>
            <b>Degree Requirements</b>
            <br />
            {degreeProgramRequirements.map(({ name }) => (
              <span key={name}>{name} </span>
            ))}
          </Modal.Content> */}
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <h3>Course Information</h3>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card fluid>
                    <Card.Content header="Description" />
                    <Card.Content description={description} />
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card fluid>
                    <Card.Content header="Credit Hours" />
                    <Card.Content description={credits} />
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card fluid>
                    <Card.Content header="Requirements Filled" />
                    <Card.Content
                      description={degreeProgramRequirements.map(({ name }) => (
                        <span key={name}>{name} </span>
                      ))}
                    />
                  </Card>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card fluid>
                    <Card.Content header="Prerequisites" />
                    <Card.Content description={'coming soon'} />
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={this.handleClose}>Close</Button>
            {courseInPlan ? (
              <Button
                negative
                onClick={() => {
                  this.props.removeCourseFromUnplannedCourses(this.props.course)
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
