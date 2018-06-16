// AddUserAction.js
import UserActionTypes from '../actions/UserActionTypes'
import AppLogger from '../../../../commons/logger/AppLogger'

// add user action
export const addUserAction = (user) => {
  // log input
  AppLogger.info('addUserAction user :', user)

  // add user
  return {
    type: UserActionTypes.ADD_USER,
    payload: user,
  }
}

// add user action
export const removeUserAction = (user) => {
  // log input
  AppLogger.info('removeUserAction user :', user)

  // remove user
  return {
    type: UserActionTypes.REMOVE_USER,
    payload: user,
  }
}

