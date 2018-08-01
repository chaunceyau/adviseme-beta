import { ActionTypes, updateObject } from '../actions'

//
import { updateItemInArray } from './'

const initialState = {
  unplannedCourses: [
    {
      id: 1,
      name: 'test 1'
    },
    {
      id: 2,
      name: 'test 2'
    },
    {
      id: 14,
      name: 'Math 100'
    }
  ],
  academicUnits: [
    {
      id: 1,
      name: '2019',
      courses: []
    },
    {
      id: 6,
      name: '2020',
      courses: []
    },
    {
      id: 64,
      name: '2021',
      courses: []
    },
    {
      id: 62,
      name: '2022',
      courses: []
    }
  ]
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Add a course to planner. Course will not yet be in planner
     */
    case ActionTypes.ADD_COURSE_TO_PLANNER: {
      const { id, name } = action.payload
      return {
        ...state,
        // add new course to unplanned courses
        unplannedCourses: state.unplannedCourses.concat({
          id,
          name
        })
      }
    }

    /**
     * Add new academic unit representing a unit of schooling student will be here for
     */
    case ActionTypes.ADD_ACADEMIC_UNIT: {
      const { id, name } = action.payload
      return { ...state, academicUnits: state.academicUnits.concat({ id, name, courses: [] }) }
    }

    /**
     * Remove an academic unit
     *
     * TODO: Should remove courses from unit and add back to unplanned courses
     */
    case ActionTypes.REMOVE_ACADEMIC_UNIT: {
      const academicUnitIndex = state.academicUnits.findIndex(obj => obj.id === action.payload.id)
      return {
        ...state,
        // move courses from academic unit to the unplanned courses section
        unplannedCourses: state.unplannedCourses.concat(state.academicUnits[academicUnitIndex].courses),
        // remove the selected academic unit
        academicUnits: state.academicUnits.filter(academicUnit => academicUnit.id !== academicUnitIndex)
      }
    }

    /**
     * Add a course to a specific academic unit
     *
     * @var course
     *    The new course user is moving to an academic unit
     *
     * @var academicUnit
     *    The academic unit the course is being move to
     */
    case ActionTypes.MOVE_COURSE_TO_ACADEMIC_UNIT: {
      const { course, academicUnit } = action.payload
      return {
        ...state,
        // remove course from unplanned courses
        unplannedCourses: state.unplannedCourses.filter(({ id }) => id !== course.id),
        // move course to desired academic unit
        academicUnits: updateItemInArray(state.academicUnits, academicUnit.id, unit => ({
          ...unit,
          courses: unit.courses.concat({ id: course.id, name: course.name })
        }))
      }
    }
    default:
      return state
  }
}
