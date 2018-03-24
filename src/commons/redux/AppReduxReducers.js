import { combineReducers } from 'redux'

const AppReduxReducers = (...reducers) => combineReducers({
  ...reducers,
})

export default AppReduxReducers
