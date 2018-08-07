import { ActionTypes } from '../actions'

export default function reducer(
  state = {
    id: -1,
    currentStudent: {
      id: '',
      degreeTypes: [{ id: '' }]
    },
    unplannedCourses: [],
    academicUnits: []
  },
  action
) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: {
          id: action.payload.id
        }
      }

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
