import React, { Component } from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'

//
import { ADD_COURSE_TO_ACADEMIC_UNIT } from '../../../../graphql/mutations'
import { GET_STUDENT_PLANNED_ACADEMIC_UNITS } from '../../../../graphql/queries'
import { updateItemInArray, updateObject } from '../../../../reducers'

class PlannerCourse extends Component {
  render() {
    return (
      <Mutation
        mutation={ADD_COURSE_TO_ACADEMIC_UNIT}
        refetchQueries={[{ query: GET_STUDENT_PLANNED_ACADEMIC_UNITS }]}
        // update={(cache, { data: { addToStudentAcademicUnitsOnCourse } }) => {
        //   let data = cache.readQuery({ query: GET_STUDENT_PLANNED_ACADEMIC_UNITS })
        //   // console.log('olddata : ', data)
        //   // // console.log(data.User.studentAcademicUnits)
        //   // const newAca = updateItemInArray(
        //   //   data.User.studentAcademicUnits,
        //   //   addToStudentAcademicUnitsOnCourse.studentAcademicUnitsStudentAcademicUnit.id,
        //   //   unit => ({
        //   //     unit: { ...unit, courses: unit.courses.concat(addToStudentAcademicUnitsOnCourse.coursesCourse) }
        //   //   })
        //   // )
        //   // // updateObject(data, { User: { studentAcademicUnits: newAca } })

        //   // console.log('newdata : ', updateObject(data, { User: { studentAcademicUnits: newAca } }))

        //   // console.log('completed')
        //   // console.log(data)
        //   // // console.log('stud : ', studentAcademicUnits)
        //   // console.log(addToStudentAcademicUnitsOnCourse.coursesCourse)

        //   cache.writeQuery({
        //     query: GET_STUDENT_PLANNED_ACADEMIC_UNITS,
        //     data: data
        //   })
        //   console.log(cache)
        // }}
      >
        {addCourseToAcademicUnit => {
          return (
            <Card key={this.props.name} fluid style={{ minHeight: 35 }}>
              <Card.Content>
                <Grid columns="equal">
                  <Grid.Column width={10}>
                    <span>{this.props.name}</span>
                  </Grid.Column>
                  <Grid.Column textAlign={'right'}>
                    <Button
                      onClick={() =>
                        addCourseToAcademicUnit({
                          variables: {
                            coursesCourseID: 'cjk321qat04we0108ydghuspt',
                            studentAcademicUnitsStudentAcademicUnitId: 'cjkab8vw886un0164ka30evyu'
                          }
                        })
                      }
                    >
                      test
                    </Button>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          )
        }}
      </Mutation>
    )
  }
}

export default PlannerCourse
