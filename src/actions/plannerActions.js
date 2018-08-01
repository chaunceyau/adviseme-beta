import { ActionTypes } from './'

export function addCourseToPlanner(id, name) {
  return {
    type: ActionTypes.ADD_COURSE_TO_PLANNER,
    payload: {
      id,
      name
    }
  }
}

export function addAcademicUnit(id, name) {
  return {
    type: ActionTypes.ADD_ACADEMIC_UNIT,
    payload: {
      id,
      name,
      courses: []
    }
  }
}

export function moveCourseToAcademicUnit(id, name, newUnitId) {
  return {
    type: ActionTypes.MOVE_COURSE_TO_ACADEMIC_UNIT,
    payload: {
      course: {
        id,
        name
      },
      academicUnit: {
        id: newUnitId
      }
    }
  }
}
