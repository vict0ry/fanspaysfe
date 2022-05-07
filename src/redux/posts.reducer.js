import { POST_ADDED, POSTS_DELETED, POSTS_LOADED } from './constants'

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
        posts: [action.post,...state.posts]
      }
    default:
      return state
  }
}
