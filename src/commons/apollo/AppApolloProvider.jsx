import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Routes from '../../routes/Routes'
import AppApolloClient from './AppApolloClient'

// define a Appolo Provider
const AppApolloProvider = () => (
  <ApolloProvider client={AppApolloClient} >
    <Routes />
  </ApolloProvider >
)

export default AppApolloProvider
