import axios from 'axios'
import { CHATS_LOADED, MESSAGES_LOADED } from '../constants'

export const loadChats = () => {
  return (dispatch) => {
    return axios.get('/api/chats/').then(chatList => {
      return dispatch(chatsLoaded(chatList.data))
    })
  }
}

export const chatsLoaded = (data) => {
  return {
    type: CHATS_LOADED,
    data
  }
}

export const loadChatMessages = (chatId) => {
  return dispatch => {
    return axios.get('/api/chats/' + chatId + '/messages').then(data => {
        return dispatch(messagesLoaded({
          data: data.data,
          chatId
        }))
      }
    )
  }
}
export const sendMessage = (message) => {
  return (dispatch, getState) => {
    const chatId = getState().messages.selectedChatId
    return axios.post('/api/messages', {
      content: message,
      chatId
    }).then(_ => dispatch(loadChatMessages(chatId)))
  }
}
export const messagesLoaded = ({ data, chatId }) => {
  return {
    type: MESSAGES_LOADED,
    payload: {
      data,
      chatId
    }
  }
}

