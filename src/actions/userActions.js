import { ActionTypes } from './'

export function getCurrentUser() {
  return {
    type: ActionTypes.GET_CURRENT_USER,
    payload: {
      id: 'cjkab5xca7am40172xazvahh8'
    }
  }
}

export function setCurrentStudent(id) {
  return {
    type: ActionTypes.SET_CURRENT_STUDENT,
    payload: {
      id: id
    }
  }
}
