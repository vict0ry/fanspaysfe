import { combineReducers } from 'redux'
import user from './user.reducer'
import messages from './messages.reducer'
import posts from './posts.reducer'
import profile from './profile.reducer'

export default combineReducers({
  user,
  messages,
  posts,
  profile
})
