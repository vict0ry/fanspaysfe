import { COMMENT_ADDED, POST_ADDED, POSTS_DELETED, POSTS_LOADED } from '../constants'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.data
      }
    case POSTS_DELETED:
      return {
        ...state,
        posts: state.posts.filter(i => i._id !== action.postId)
      }
    case POST_ADDED:
      return {
        ...state,
        posts: [action.post, ...state.posts]
      }
    case COMMENT_ADDED:
      const updatedPosts = [...state.posts]
      const commentedPost = updatedPosts.find(post => action.data.postId === post._id)
      commentedPost.comments.push(action.data.comment)
      return {
        ...state,
        posts: updatedPosts
      }
    default:
      return state
  }
}
