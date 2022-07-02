import { USER_LOGGED_IN, USER_LOGOUT } from '../constants'

const initialState = {
  userData: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        userData: action.data
      }
    case USER_LOGOUT:
      return {
        ...state,
        userData: null
      }

    default:
      return state
  }
}
