import axios from 'axios'
import { PROFILE_LOADED, PROFILE_SUBSCRIBED } from '../constants'
import { loadPosts } from './posts.action'
import { hideAttachCardDialog, showAttachCardDialog } from './attachCardDialog.action'

export const loadProfile = (username) => {
  return dispatch => axios.get('/profile/' + username).then(res => {
    return dispatch(loadPosts(res.data.profileUser.username)).then(() => {
      return dispatch(profileLoaded(res.data));
    })
  })
}
export const toggleSubscribe = (id) => {
  return dispatch => axios.put(`/api/users/${id}/follow`).then(({data}) => {
    if (data?.error?.message === "INSUFFICIENT_BALANCE") {
      dispatch(showAttachCardDialog())
    } else {
      dispatch(profileSubscribed(data.followers))
    }

  })
}
export const profileLoaded = (data) => {
  return {
    type: PROFILE_LOADED,
    data
  }
}
export const profileSubscribed = (followers) => {
  return {
    type: PROFILE_SUBSCRIBED,
    followers
  }
}
