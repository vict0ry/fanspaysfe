import { combineReducers } from 'redux'
import user from './user.reducer'
import messages from './messages.reducer'

export default combineReducers({
  user,
  messages
})
