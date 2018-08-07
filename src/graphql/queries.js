import gql from 'graphql-tag'

export const STUDENT_ID = 'cjkisobtc002l0949p6ts97bo'

export const GET_STUDENT_PLAN_INFORMATION = gql`
  query {
    user(where:{id: "${STUDENT_ID}"}) {
      id
      unplannedCourses {
        id
        name
      }
      studentAcademicUnits {
        id
        academicUnit
        courses {
          id
          name
        }
      }
      # degree student is in
      degreePrograms {
        id
        name
        # LEVEL 0: CATEGORIES 
        # top level degree requirements (e.g. KSU 8)
        degreeProgramRequirements {
          id
          name
          logicalOperator
          # LEVEL 1: COURSE OPTIONS
          courseOptions { 
            id
            name
          }
          # LEVEL 1: CATEGORIES
          degreeProgramRequirementOptions {
            id
            name
            logicalOperator
            # LEVEL 2: COURSE OPTIONS
            courseOptions { 
              id
              name
            }
            # LEVEL 2: CATEGORIES
            degreeProgramRequirementOptions {
              id
              name
              logicalOperator
              # LEVEL 3: COURSE OPTIONS
              courseOptions { 
                id
                name
              }
              # LEVEL 3: CATEGORIES
              degreeProgramRequirementOptions {
                id
                name
                logicalOperator
                # LEVEL 4: COURSE OPTIONS
                courseOptions { 
                  id
                  name
                }
                # LEVEL 4: CATEGORIES
                degreeProgramRequirementOptions {
                  id
                  name
                  logicalOperator
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_STUDENT_PLAN_ACADEMIC_UNITS = gql`
  query {
    User(id: "${STUDENT_ID}") {
      studentAcademicUnits {
        id
        academicUnit
        courses {
          id
          name
        }
      }
    }
  }
`

export const GET_AVAILABLE_ACADEMIC_UNITS = gql`
  query enumValuesOfMetaInformationTags {
    __type(name: "AcademicUnits") {
      name
      enumValues {
        name
      }
    }
  }
`

export const TEST_ME_CLIENT_PICKED_UNITS = gql`
  query {
    User(id: "${STUDENT_ID}") {
      studentAcademicUnits {
        academicUnit @client
      }
    }
  }
`
export const ADD_COURSE_TO_USER_PLAN = gql`
  mutation AddToUserOnCourse($courseID: ID!, $userID: ID!) {
    addToUserOnCourse(unplannedCoursesCourseId: $courseID, usersUserId: $userID) {
      usersUser {
        id
        name
        unplannedCourses {
          id
          name
        }
      }
    }
  }
`
// maybe?
export const GET_STUDENT_UNPLANNED_COURSES = gql`
  query {
    User(id: "${STUDENT_ID}") {
      unplannedCourses {
        id
        name
      }
    }
  }
`

// Goes 5 levels deep.
export const GET_STUDENT_DEGREE_REQUIREMENTS = gql`
  query {
    User(id: "${STUDENT_ID}") {
      # degree student is in
      degreePrograms {
        id
        name
        # LEVEL 0: CATEGORIES 
        # top level degree requirements (e.g. KSU 8)
        degreeProgramRequirements {
          id
          degreeRequirementGroupName
          logicalOperator
          # LEVEL 1: COURSE OPTIONS
          courseOptions { 
            id
            name
          }
          # LEVEL 1: CATEGORIES
          degreeProgramRequirementOptions {
            id
            degreeRequirementGroupName
            logicalOperator
            # LEVEL 2: COURSE OPTIONS
            courseOptions { 
              id
              name
            }
            # LEVEL 2: CATEGORIES
            degreeProgramRequirementOptions {
              id
              degreeRequirementGroupName
              logicalOperator
              # LEVEL 3: COURSE OPTIONS
              courseOptions { 
                id
                name
              }
              # LEVEL 3: CATEGORIES
              degreeProgramRequirementOptions {
                id
                degreeRequirementGroupName
                logicalOperator
                # LEVEL 4: COURSE OPTIONS
                courseOptions { 
                  id
                  name
                }
                # LEVEL 4: CATEGORIES
                degreeProgramRequirementOptions {
                  id
                  degreeRequirementGroupName
                  logicalOperator
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_COURSE_OPTIONS_FOR_REQUIREMENT = gql`
  query GetDegreeProgramRequirement($requirementGroupID: ID!) {
    DegreeProgramRequirement(id: $requirementGroupID) {
      id
      degreeRequirementGroupName
      courseOptions {
        id
        name
        description
        number
        department {
          id
          name
        }
      }
    }
  }
`
