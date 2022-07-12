const initialState = {
  successSnackbarOpen: false,
  errorSnackbarOpen: false,
  infoSnackbarOpen: false,
  subscribeInsufficientAmountDialog: false
}
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_INSUFFICIENT_DIALOG":
      return {
        ...state,
        subscribeInsufficientAmountDialog: true
      }
    case "HIDE_INSUFFICIENT_DIALOG":
      return {
        ...state,
        subscribeInsufficientAmountDialog: false
      }
    case "SNACKBAR_SUCCESS":
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: action.message
      };
    case "SNACKBAR_CLEAR":
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false
      };
    default:
      return state;
  }
};

export default uiReducer;