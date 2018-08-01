export default function reducer(
  state = {
    id: -1,
    name: ''
  },
  action
) {
  switch (action.type) {
    case 'GET_STUDENT_COURSES':
      return { ...state }
    case 'ADD_STUDENT_TO_ADVISOR':
      return { ...state }
    case 'REMOVE_STUDENT_FROM_ADVISOR':
      return { ...state }
    default:
      return state
  }
}
