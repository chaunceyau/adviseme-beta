export * from './userActions'

export const ActionTypes = {
  SET_DEGREE_PROGRAMS: 'SET_DEGREE_PROGRAMS',

  // COURSES
  ADD_COURSE_TO_UNPLANNED_COURSES: 'ADD_COURSE_TO_UNPLANNED_COURSES',
  REMOVE_COURSE_FROM_UNPLANNED_COURSES: 'REMOVE_COURSE_FROM_UNPLANNED_COURSES',

  REMOVE_COURSE_FROM_PLAN: 'REMOVE_COURSE_FROM_PLAN',

  // ACADEMIC UNITS
  ADD_COURSE_TO_ACADEMIC_UNIT: 'ADD_COURSE_TO_ACADEMIC_UNIT',
  REMOVE_COURSE_FROM_ACADEMIC_UNIT: 'REMOVE_COURSE_FROM_ACADEMIC_UNIT',

  ADD_ACADEMIC_UNIT: 'ADD_ACADEMIC_UNIT',
  REMOVE_ACADEMIC_UNIT: 'REMOVE_ACADEMIC_UNIT',

  SET_AVAILABLE_ACADEMIC_UNITS: 'SET_AVAILABLE_ACADEMIC_UNITS',

  //
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',

  TEST: 'TEST'
}
