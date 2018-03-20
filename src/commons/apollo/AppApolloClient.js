import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// configure an ApolloClient
const AppApolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_PATH }),
  cache: new InMemoryCache(),
})

export default AppApolloClient

