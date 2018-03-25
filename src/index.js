import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import AppLogger from './commons/logger/AppLogger'
import AppApolloProvider from './commons/apollo/AppApolloProvider'
import UserModule from './users/index'

// configure env vars
dotenv.config()
AppLogger.info('REACT_APP_GRAPHQL_PATH: ', process.env.REACT_APP_GRAPHQL_PATH)
AppLogger.info('REACT_APP_LOG_DIR_NAME: ', process.env.REACT_APP_LOG_DIR_NAME)
AppLogger.info('REACT_APP_LOG_FILE_NAME: ', process.env.REACT_APP_LOG_FILE_NAME)
AppLogger.info('REACT_APP_LOG_MAX_SIZE: ', process.env.REACT_APP_LOG_MAX_SIZE)
AppLogger.info('REACT_APP_LOG_MAX_FILE: ', process.env.REACT_APP_LOG_MAX_FILE)
AppLogger.info('REACT_APP_LOG_DATE_PATTERN: ', process.env.REACT_APP_LOG_DATE_PATTERN)

// render
const reducers = { reducers: [UserModule.UsersReducer] }
AppLogger.info('Start reducers: ', reducers)
ReactDOM.render(
  <AppApolloProvider {...reducers} />,
  document.getElementById('root'),
)
registerServiceWorker()
