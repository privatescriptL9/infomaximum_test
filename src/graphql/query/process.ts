import { gql, DocumentNode } from '@apollo/client'

export const PROCESS_LIST: DocumentNode = gql`
  query {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`
