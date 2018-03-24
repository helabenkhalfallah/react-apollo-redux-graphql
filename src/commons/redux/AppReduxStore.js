import { createStore } from 'redux'
import AppReduxReducers from './AppReduxReducers'
import AppCommonModule from '../../commons/index'


// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const AppReduxStore = (...reducers) => {
  AppCommonModule.AppLogger.info('AppReduxStore reducers : ', reducers)
  return createStore(AppReduxReducers(...reducers))
}

export default AppReduxStore
