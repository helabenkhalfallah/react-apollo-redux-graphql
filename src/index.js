import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes/Routes'
import AppCommonModule from './commons/index'

// configure env vars
dotenv.config()
AppCommonModule.AppLogger.info('REACT_APP_GRAPHQL_PATH: ', process.env.REACT_APP_GRAPHQL_PATH)
AppCommonModule.AppLogger.info('REACT_APP_GRAPHQL_PORT: ', process.env.REACT_APP_GRAPHQL_PORT)
AppCommonModule.AppLogger.info('REACT_APP_LOG_DIR_NAME: ', process.env.REACT_APP_LOG_DIR_NAME)
AppCommonModule.AppLogger.info('REACT_APP_LOG_FILE_NAME: ', process.env.REACT_APP_LOG_FILE_NAME)
AppCommonModule.AppLogger.info('REACT_APP_LOG_MAX_SIZE: ', process.env.REACT_APP_LOG_MAX_SIZE)
AppCommonModule.AppLogger.info('REACT_APP_LOG_MAX_FILE: ', process.env.REACT_APP_LOG_MAX_FILE)
AppCommonModule.AppLogger.info('REACT_APP_LOG_DATE_PATTERN: ', process.env.REACT_APP_LOG_DATE_PATTERN)

// render
ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
