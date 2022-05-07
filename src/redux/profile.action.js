import axios from 'axios'
import { PROFILE_LOADED } from './constants'
import { loadPosts } from './posts.action'

export const loadProfile = (username) => {
  return dispatch => axios.get('/profile/' + username).then(res => {
    return dispatch(loadPosts(res.data.profileUser._id)).then(() => {
      return dispatch(profileLoaded(res.data))
    })
  })
}
export const profileLoaded = (data) => {
  return {
    type: PROFILE_LOADED,
    data
  }
}
