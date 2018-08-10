import { ActionTypes } from '../actions'

export default function reducer(
  state = {
    unplannedCourses: [],
    academicUnits: [],
    degreePrograms: [],
    notification: {}
  },
  action
) {
  switch (action.type) {
    case ActionTypes.ADD_ACADEMIC_UNIT:
      return {
        ...state,
        academicUnits: [...state.academicUnits, action.payload]
      }

    case ActionTypes.SET_DEGREE_PROGRAMS:
      return {
        degreePrograms: action.payload,
        unplannedCourses: [],
        academicUnits: []
      }

    case ActionTypes.ADD_COURSE_TO_PLAN:
      // const currentIds = [...new Set(state.unplannedCourses.map(a => a.id))]
      if (state.unplannedCourses.some(s => s.id === action.payload.id))
        return {
          ...state,
          notification: {
            title: `This course is already in your plan.`,
            content: `${action.payload.name} has already been added to your plan. Please select a different course.`
          }
        }
      return {
        ...state,
        notification: {
          title: `The course was successfully added.`,
          content: `${action.payload.name} has successfully been added to your plan.`,
          positive: true
        },
        unplannedCourses: [...state.unplannedCourses, action.payload]
      }

    case ActionTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: null
      }

    // old stuff..
    case ActionTypes.SET_UNPLANNED_COURSES:
      return {
        ...state,
        unplannedCourses: action.payload
      }

    case ActionTypes.SET_ACADEMIC_UNITS:
      return {
        ...state,
        academicUnits: action.payload
      }

    default:
      return state
  }
}
