import { ActionTypes } from '../actions'
import { updateItemInArrayByName } from './'
import { isCourseInPlan } from '../util/Utilities'

export default function reducer(
  state = {
    unplannedCourses: [],
    academicUnits: [],
    degreePrograms: [],
    availableUnits: [],
    notification: null
  },
  action
) {
  switch (action.type) {
    case ActionTypes.TEST:
      return {
        unplannedCourses: [],
        academicUnits: [],
        degreePrograms: [],
        notification: null
      }
    // add course to plan
    case ActionTypes.ADD_COURSE_TO_UNPLANNED_COURSES: {
      if (isCourseInPlan(action.payload, state))
        return {
          ...state,
          notification: {
            title: `This course is already in your plan.`,
            content: `${action.payload.name} has already been added to your plan. Please select a different course.`,
            postive: false
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
    }

    // Remove course from sidebar
    case ActionTypes.REMOVE_COURSE_FROM_UNPLANNED_COURSES:
      console.log('remove from unplanned added ->')
      const newnew = state.unplannedCourses.filter(course => course.id !== action.payload.course.id)
      return {
        ...state,
        unplannedCourses: newnew
      }

    // Add course to specific academic unit
    case ActionTypes.ADD_COURSE_TO_ACADEMIC_UNIT:
      console.log('add to plan added ->')
      console.log('​action.payload.unitName', action.payload.unitName)
      console.log('​state.academicUnits', state.academicUnits)

      return {
        ...state,
        academicUnits: updateItemInArrayByName(state.academicUnits, action.payload.unitName, unit => {
          return { ...unit, courses: [...unit.courses, action.payload.course] }
        }),
        unplannedCourses: state.unplannedCourses.filter(course => course.id !== action.payload.course.id)
      }

    // Remove course to specific academic unit
    case ActionTypes.REMOVE_COURSE_FROM_ACADEMIC_UNIT:
      return {
        ...state,
        academicUnits: updateItemInArrayByName(state.academicUnits, action.payload.unitName, unit => {
          return {
            ...unit,
            courses: unit.courses.filter(course => course.id !== action.payload.course.id)
          }
        })
      }

    // Find course in plan and remove
    case ActionTypes.REMOVE_COURSE_FROM_PLAN:
      // first check if course is in unplanned courses
      if (state.unplannedCourses.some(course => course.id === action.payload.course.id))
        return {
          ...state,
          unplannedCourses: state.unplannedCourses.filter(course => course.id !== action.payload.course.id)
        }
      // if course not in unplanned, must be in academic unit. need to find it and remove it
      return {
        ...state,
        academicUnits: updateItemInArrayByName(
          state.academicUnits,
          state.academicUnits.find(val => val.courses.some(course => course.id === action.payload.course.id)).name,
          unit => {
            return {
              ...unit,
              courses: unit.courses.filter(course => course.id !== action.payload.course.id)
            }
          }
        )
      }

    // Add new academic unit to plan
    case ActionTypes.ADD_ACADEMIC_UNIT:
      console.log('​action.payload', action.payload)
      console.log('state.payload', state.academicUnits)
      console.log('state.update', [...state.academicUnits, action.payload])
      const tempUnits = [...state.academicUnits, action.payload]
      console.log('tesltsl', state.availableUnits)
      tempUnits
        .sort((a, b) => state.availableUnits.indexOf(a.name) - state.availableUnits.indexOf(b.name))
        .map(u => ({ name: u, courses: [] }))
      console.log(tempUnits)
      return {
        ...state,
        academicUnits: tempUnits
      }

    case ActionTypes.SET_DEGREE_PROGRAMS:
      return {
        ...state,
        degreePrograms: action.payload
      }

    case ActionTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: null
      }

    case ActionTypes.SET_AVAILABLE_ACADEMIC_UNITS:
      return {
        ...state,
        availableUnits: action.payload
      }

    default:
      return state
  }
}
