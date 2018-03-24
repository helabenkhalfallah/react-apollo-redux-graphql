// UsersReducer.js
import UserActionTypes from '../actions/UserActionTypes'
import AppCommonModule from '../../../commons/index'


// user reducer
const UsersReducer = (state = {}, { type, payload }) => {
  // log parms
  AppCommonModule.AppLogger.info('passing from UsersReducer ...')
  AppCommonModule.AppLogger.info('passing from UsersReducer type :', type)
  AppCommonModule.AppLogger.info('passing from UsersReducer payload :', payload)
  let newState
  switch (type) {
    case UserActionTypes.ADD_USER:
      newState = {
        userToAdd: payload,
      }
      break
    case UserActionTypes.REMOVE_USER:
      newState = {
        userToRemove: payload,
      }
      break
    default:
      newState = state
      break
  }

  // new state
  AppCommonModule.AppLogger.info('passing from UsersReducer state : ', state)
  AppCommonModule.AppLogger.info('passing from UsersReducer newState : ', newState)
  return newState
}

export default UsersReducer
