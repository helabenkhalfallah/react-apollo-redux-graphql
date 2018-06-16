// UsersReducer.js
import UserActionTypes from '../actions/UserActionTypes'
import AppLogger from '../../../../commons/logger/AppLogger'


// user reducer
const UsersReducer = (state = {}, { type, payload }) => {
  // log parms
  AppLogger.info('passing from UsersReducer ...')
  AppLogger.info('passing from UsersReducer type :', type)
  AppLogger.info('passing from UsersReducer payload :', payload)
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
  AppLogger.info('passing from UsersReducer state : ', state)
  AppLogger.info('passing from UsersReducer newState : ', newState)
  return newState
}

export default UsersReducer
