import { setContext } from '@apollo/client/link/context'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import React from 'react'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api'
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token') || null

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const Apollo: React.FC = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
)

export default Apollo
