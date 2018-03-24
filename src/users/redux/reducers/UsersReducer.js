// UsersReducer.js
import UserActionTypes from '../actions/UserActionTypes'

// user reducer
const UsersReducer = (state = 0, action) => {
  let newState
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      newState = state + action.payload
      break
    case UserActionTypes.REMOVE_USER:
      newState = state - action.payload
      break
    default:
      newState = state
      break
  }

  // new state
  return newState
}

export default UsersReducer
