import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import AppCommonModule from './commons/index'
import UserModule from './users/index'

// configure env vars
dotenv.config()
AppCommonModule.AppLogger.info('REACT_APP_GRAPHQL_PATH: ', process.env.REACT_APP_GRAPHQL_PATH)
AppCommonModule.AppLogger.info('REACT_APP_LOG_DIR_NAME: ', process.env.REACT_APP_LOG_DIR_NAME)
AppCommonModule.AppLogger.info('REACT_APP_LOG_FILE_NAME: ', process.env.REACT_APP_LOG_FILE_NAME)
AppCommonModule.AppLogger.info('REACT_APP_LOG_MAX_SIZE: ', process.env.REACT_APP_LOG_MAX_SIZE)
AppCommonModule.AppLogger.info('REACT_APP_LOG_MAX_FILE: ', process.env.REACT_APP_LOG_MAX_FILE)
AppCommonModule.AppLogger.info('REACT_APP_LOG_DATE_PATTERN: ', process.env.REACT_APP_LOG_DATE_PATTERN)

// render
const reducers = { reducers: [UserModule.UsersReducer] }
AppCommonModule.AppLogger.info('Start reducers: ', reducers)
ReactDOM.render(
  <AppCommonModule.AppApolloProvider {...reducers} />,
  document.getElementById('root'),
)
registerServiceWorker()
