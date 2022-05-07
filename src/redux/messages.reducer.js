import { CHATS_LOADED, LOADED_CHAT_MESSAGES, MESSAGES_LOADED } from './constants'

const initialState = {
  selectedChatId: undefined,
  chatList: undefined,
  selectedChatMessages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LOADED:
      return {
        ...state,
        selectedChatId: action.payload.chatId,
        selectedChatMessages: action.payload.data
      }
    case CHATS_LOADED:
      return {
        ...state,
        chatList: action.data
      }
    case LOADED_CHAT_MESSAGES:
      return {
        ...state,
        chatList: action.data
      }

    default:
      return state
  }
}
