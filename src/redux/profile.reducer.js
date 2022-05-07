import { PROFILE_LOADED } from './constants'

const initialState = {
  profile: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.data
      }
    default:
      return state
  }
}
