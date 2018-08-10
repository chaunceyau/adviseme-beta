import gql from 'graphql-tag'

export const STUDENT_ID = 'cjkisobtc002l0949p6ts97bo'

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

export const GET_COURSE_OPTIONS_FOR_REQUIREMENT = gql`
  query($id: ID!) {
    degreeProgramRequirement(where: { id: $id }) {
      id
      name
      courseOptions {
        id
        name
        number
        description
        department {
          id
          name
        }
      }
    }
  }
`

export const GET_REQUIREMENTS_FOR_DEGREE = gql`
  query($ids: [ID!]) {
    degreePrograms(where: { id_in: $ids }) {
      id
      name
      # top level
      degreeProgramRequirements {
        id
        name
        logicalOperator
        # 1 level deep
        degreeProgramRequirementOptions {
          id
          name
          logicalOperator
          # 2 levels deep
          courseOptions {
            id
            name
          }
          # 2 levels deep
          degreeProgramRequirementOptions {
            id
            name
            logicalOperator
            # 3 levels deep
            courseOptions {
              id
              name
            }
            # 3 levels deep
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
`

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
