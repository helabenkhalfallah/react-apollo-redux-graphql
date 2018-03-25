import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

// app import
import Routes from '../../routes/Routes'
import AppApolloClient from './AppApolloClient'
import AppReduxStore from '../redux/AppReduxStore'
import AppLogger from '../logger/AppLogger'


// define a Appolo Provider
const AppApolloProvider = ({ reducers }) => {
  AppLogger.info('AppApolloProvider reducers: ', reducers)
  return (
    <ApolloProvider client={AppApolloClient} >
      <Provider store={AppReduxStore(...reducers)}>
        <Routes />
      </Provider>
    </ApolloProvider >
  )
}

// prop type validation
AppApolloProvider.propTypes = {
  reducers: PropTypes.array.isRequired,
}

export default AppApolloProvider
