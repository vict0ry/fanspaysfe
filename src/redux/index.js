import { combineReducers } from 'redux'
import user from './reducers/user.reducer'
import messages from './reducers/messages.reducer'
import posts from './reducers/posts.reducer'
import profile from './reducers/profile.reducer'
import uiReducer from './reducers/uiReducer'

export default combineReducers({
  user,
  messages,
  posts,
  profile,
  uiReducer
})
