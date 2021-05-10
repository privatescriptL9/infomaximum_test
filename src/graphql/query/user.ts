import { gql, DocumentNode } from '@apollo/client'

export const CURRENT_USER: DocumentNode = gql`
  query {
    currentUser {
      id
      firstName
      secondName
    }
  }
`
