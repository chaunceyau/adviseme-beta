import { ActionTypes } from './'

//
export function test123() {
  return {
    type: ActionTypes.TEST
  }
}

/**
 *
 * @param {*} ids
 */
export function setDegreePrograms(ids) {
  return {
    type: ActionTypes.SET_DEGREE_PROGRAMS,
    payload: ids
  }
}

/**
 *
 * @param {*} course
 */
export function addCourseToUnplannedCourses(course) {
  return {
    type: ActionTypes.ADD_COURSE_TO_UNPLANNED_COURSES,
    payload: course
  }
}

/**
 * Remove course from sidebar
 *
 * @param course
 *  the course to be removed
 */

export function removeCourseFromUnplannedCourses(course) {
  return {
    type: ActionTypes.REMOVE_COURSE_FROM_UNPLANNED_COURSES,
    payload: {
      course
    }
  }
}

/**
 * Add academic unit
 * @param unit
 *  Object of the academic unit
 */
export function addAcademicUnit(unit) {
  return {
    type: ActionTypes.ADD_ACADEMIC_UNIT,
    payload: unit
  }
}

/**
 * Add course to specific academic unit
 * @param course
 *  the course to add to unit
 * @param name
 *  the name of unit to remove from
 */
export function addCourseToAcademicUnit(course, name) {
  return {
    type: ActionTypes.ADD_COURSE_TO_ACADEMIC_UNIT,
    payload: {
      course,
      unitName: name
    }
  }
}

/**
 * Remove course from sidebar
 *
 * @param course
 *  the course to be removed
 *
 * @param name
 *  the name of the academic unit to remove from
 */

export function removeCourseFromAcademicUnit(course, name) {
  return {
    type: ActionTypes.REMOVE_COURSE_FROM_ACADEMIC_UNIT,
    payload: {
      course,
      unitName: name
    }
  }
}

/**
 * Find course and remove course from plan.
 *
 * @param course
 *  the course to be removed
 */

export function removeCourseFromPlan(course) {
  return {
    type: ActionTypes.REMOVE_COURSE_FROM_PLAN,
    payload: {
      course
    }
  }
}

/**
 * Clear all notifications
 */
export function clearNotification() {
  return {
    type: ActionTypes.CLEAR_NOTIFICATION
  }
}

//\\\\\\///////\\\\///\\\\\\///\\\\////\\\\\\

/**
 *
 * @param {*} courses
 */
export function setUnplannedCourses(courses) {
  return {
    type: ActionTypes.SET_UNPLANNED_COURSES,
    payload: courses
  }
}

/**
 *
 * @param {*} academicUnits
 */
export function setAcademicUnits(academicUnits) {
  return {
    type: ActionTypes.SET_ACADEMIC_UNITS,
    payload: academicUnits
  }
}
