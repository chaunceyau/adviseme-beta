import gql from 'graphql-tag'

const STUDENT_ID = 'cjkab5xca7am40172xazvahh8'

export const GET_STUDENT_PLANNED_ACADEMIC_UNITS = gql`
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

// Goes 5 levels deep.
export const GET_STUDENT_DEGREE_REQUIREMENTS = gql`
  query {
    User(id: "${STUDENT_ID}") {
      # degree student is in
      degreePrograms {
        id
        programName
        # LEVEL 0: CATEGORIES 
        # top level degree requirements (e.g. KSU 8)
        degreeProgramRequirements {
          id
          degreeRequirementGroupName
          logicalOperator
          # LEVEL 1: CATEGORIES
          degreeProgramRequirementOptions {
            id
            degreeRequirementGroupName
            logicalOperator
            # LEVEL 2: CATEGORIES
            degreeProgramRequirementOptions {
              id
              degreeRequirementGroupName
              logicalOperator
              # LEVEL 3: CATEGORIES
              degreeProgramRequirementOptions {
                id
                degreeRequirementGroupName
                logicalOperator
                # LEVEL 4: CATEGORIES
                degreeProgramRequirementOptions {
                  id
                  degreeRequirementGroupName
                  logicalOperator
                }
                # LEVEL 4: COURSE OPTIONS
                courseOptions { 
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
