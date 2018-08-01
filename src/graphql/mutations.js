import gql from 'graphql-tag'

export const ADD_COURSE_TO_ACADEMIC_UNIT = gql`
  mutation AddCourseToAcademicUnit($coursesCourseID: ID!, $studentAcademicUnitsStudentAcademicUnitId: ID!) {
    addToStudentAcademicUnitsOnCourse(
      coursesCourseId: $coursesCourseID
      studentAcademicUnitsStudentAcademicUnitId: $studentAcademicUnitsStudentAcademicUnitId
    ) {
      coursesCourse {
        id
        name
      }
      studentAcademicUnitsStudentAcademicUnit {
        id
        academicUnit
      }
    }
  }
`

export const REMOVE_COURSE_FROM_ACADEMIC_UNIT = gql`
  mutation RemoveCourseFromAcademicUnit($coursesCourseID: ID!, $studentAcademicUnitsStudentAcademicUnitId: ID!) {
    removeFromStudentAcademicUnitsOnCourse(
      coursesCourseId: $coursesCourseID
      studentAcademicUnitsStudentAcademicUnitId: $studentAcademicUnitsStudentAcademicUnitId
    ) {
      coursesCourse {
        id
        name
      }
      studentAcademicUnitsStudentAcademicUnit {
        id
        academicUnit
      }
    }
  }
`
