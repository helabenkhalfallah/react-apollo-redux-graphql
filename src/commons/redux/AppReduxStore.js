import { createStore } from 'redux'
import AppReduxReducers from './AppReduxReducers'
import AppLogger from '../logger/AppLogger'


// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const AppReduxStore = (...reducers) => {
  AppLogger.info('AppReduxStore reducers : ', reducers)
  return createStore(AppReduxReducers(...reducers))
}

export default AppReduxStore
