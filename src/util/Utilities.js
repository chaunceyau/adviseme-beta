import { store } from '../store'
import _ from 'lodash'

export function toTitleCase(str) {
  if (!str) return null
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

export function replaceUnderscoreWithSpace(str) {
  if (!str) return null
  return str.replace(/_/g, ' ')
}

export function isCourseInPlan(course, state) {
  const { academicUnits, unplannedCourses } = state ? state : store.getState().user
  const plannerCourseIDs = _.union(
    academicUnits.reduce((acc, { courses }) => {
      for (const c of courses) {
        acc.push(c.id)
      }
      return acc
    }, []),
    unplannedCourses.reduce((acc, { id }) => {
      acc.push(id)
      return acc
    }, [])
  )
  return plannerCourseIDs.some(val => val === course.id)
}
