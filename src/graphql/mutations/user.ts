import { DocumentNode, gql } from '@apollo/client'

export const SIGN_UP: DocumentNode = gql`
  mutation signup(
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    )
  }
`

export const LOGIN: DocumentNode = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        firstName
        secondName
        email
      }
    }
  }
`

export const EDIT_USER: DocumentNode = gql`
  mutation editUser(
    $id: Int!
    $email: String!
    $firstName: String!
    $secondName: String!
    $password: String
  ) {
    editUser(
      id: $id
      email: $email
      firstName: $firstName
      secondName: $secondName
      password: $password
    ) {
      firstName
      secondName
    }
  }
`
