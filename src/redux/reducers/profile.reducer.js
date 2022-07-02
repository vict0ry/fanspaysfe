import { PROFILE_LOADED, PROFILE_SUBSCRIBED } from '../constants'

const initialState = {
  profile: undefined,
  subscribed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        profile: action.data
      }
    case PROFILE_SUBSCRIBED:
      return {
        ...state,
        profile: {
          ...state.profile,
          profileUser: {
            ...state.profile.profileUser,
            followers: action.followers
          }
        }
      }
    default:
      return state
  }
}
