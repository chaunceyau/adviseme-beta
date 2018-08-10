import { ActionTypes } from './'

export function setUnplannedCourses(courses) {
  return {
    type: ActionTypes.SET_UNPLANNED_COURSES,
    payload: courses
  }
}
export function setAcademicUnits(academicUnits) {
  return {
    type: ActionTypes.SET_ACADEMIC_UNITS,
    payload: academicUnits
  }
}
export function setDegreePrograms(ids) {
  return {
    type: ActionTypes.SET_DEGREE_PROGRAMS,
    payload: ids
  }
}

export function addCourseToPlan(course) {
  return {
    type: ActionTypes.ADD_COURSE_TO_PLAN,
    payload: course
  }
}

export function clearNotification() {
  return {
    type: ActionTypes.CLEAR_NOTIFICATION
  }
}

export function addAcademicUnit(unit) {
  return {
    type: ActionTypes.ADD_ACADEMIC_UNIT,
    payload: unit
  }
}
