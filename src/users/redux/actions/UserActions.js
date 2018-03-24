// AddUserAction.js
import UserActionTypes from '../actions/UserActionTypes'

// add user action
export const addUserAction = () => ({
  type: UserActionTypes.ADD_USER,
  payload: 1,
})

// add user action
export const removeUserAction = () => ({
  type: UserActionTypes.REMOVE_USER,
  payload: 1,
})

