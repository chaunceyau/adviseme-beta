import { ActionTypes } from '../actions'

export default function reducer(
  state = {
    id: -1,
    name: '',
    currentStudent: {}
  },
  action
) {
  switch (action.type) {
    case 'GET_STUDENT_COURSES':
      return { ...state }
    case ActionTypes.SET_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: {
          id: action.payload.id
        }
      }
    default:
      return state
  }
}
