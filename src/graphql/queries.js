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
        # top level degree requirements (e.g. KSU 8)
        degreeProgramRequirements {
          # id
          degreeRequirementGroupName
          logicalOperator
          # LEVEL 1: CATEGORIES
          degreeProgramRequirementOptions {
            # id
            degreeRequirementGroupName
            logicalOperator
            degreeProgramRequirementOptions {
              # id
              degreeRequirementGroupName
              logicalOperator
            }
          }
        }
      }
    }
  }
`
