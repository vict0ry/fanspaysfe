export const showAttachCardDialog = () => {
  return dispatch => {
    dispatch({ type: 'DISPLAY_INSUFFICIENT_DIALOG' })
  }
}

export const hideAttachCardDialog = () => {
  return dispatch => {
    dispatch({ type: 'HIDE_INSUFFICIENT_DIALOG' })
  }
}