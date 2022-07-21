import axios from 'axios'
import { COMMENT_ADDED, POST_ADDED, POSTS_DELETED, POSTS_LOADED, REPLY_COMMENT_ADDED } from '../constants'

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
export const changePost = (postId, formData) => {
  console.log(formData)
  return (dispatch) => {
    return axios({
      method: 'post',
      url: '/api/posts/' + postId + '/update',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(post => {
      console.log(post)
    })

    // return axios.post('/api/posts/' + postId + '/update', formData).then(({ data }) => {
    //   console.log(data)
    //   dispatch(deletedPost(data._id))
    // })
  }
}
export const likePost = (postId) => {
  return (dispatch, getState) => {
    return axios.put('/api/posts/' + postId + '/like').then(res => {
      console.log(res)
    })
  }
}
export const commentPost = (postId, comment) => {
  return (dispatch, getState) => {
    return axios.put('/api/posts/' + postId + '/comment', {
      postId,
      comment
    }).then(({ data }) => {
      dispatch(commentAdded(postId, data))
    })
  }
}
export const replyComment = (commentId, comment) => {
  return (dispatch, getState) => {
    return axios.put('/api/comments/' + commentId, {
      comment
    }).then(res => {
      dispatch(replyCommentAdded(commentId, res))
    })
  }
}
export const likeComment = (postId, commentId) => {
  return (dispatch, getState) => {
    return axios.put('/api/comments/' + commentId + '/like').then(({ data }) => {
      dispatch(likeAdded(postId, data))
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

export const commentAdded = (postId, comment) => {
  return {
    type: COMMENT_ADDED,
    data: { postId, comment }
  }
}

export const replyCommentAdded = (commentId, comment) => {
  return {
    type: REPLY_COMMENT_ADDED,
    data: { commentId, comment }
  }
}

