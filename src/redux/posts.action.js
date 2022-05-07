import axios from 'axios'
import { POST_ADDED, POSTS_DELETED, POSTS_LOADED } from './constants'

export const loadPosts = (userId) => {
  return (dispatch) => {
    return axios.get('/api/posts/' + userId).then(posts => {
      dispatch(postsLoaded(posts.data))
    })
  }
}
export const removePost = (postId) => {
  return (dispatch) => {
    return axios.delete('/api/posts/' + postId).then(({ data }) => {
      dispatch(deletedPost(data._id))
    })
  }
}
export const likePost = (postId) => {
  return (dispatch, getState) => {
    return axios.put('/api/posts/' + postId + '/like').then(res => {
      console.log(res)
    })
  }
}

export const postsLoaded = (data) => {
  return {
    type: POSTS_LOADED,
    data
  }
}

export const deletedPost = (postId) => {
  return {
    type: POSTS_DELETED,
    postId
  }
}


export const postAdded = (post) => {
  return {
    type: POST_ADDED,
    post
  }
}

