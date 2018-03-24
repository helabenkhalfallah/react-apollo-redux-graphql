// AddUserAction.js
import UserActionTypes from '../actions/UserActionTypes'
import AppCommonModule from '../../../commons/index'

// add user action
export const addUserAction = (user) => {
  // log input
  AppCommonModule.AppLogger.info('addUserAction user :', user)

  // add user
  return {
    type: UserActionTypes.ADD_USER,
    payload: user,
  }
}

// add user action
export const removeUserAction = () => ({
  type: UserActionTypes.REMOVE_USER,
  payload: 1,
})

