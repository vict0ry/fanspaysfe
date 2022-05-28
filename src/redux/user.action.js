import { USER_LOGGED_IN, USER_LOGOUT } from './constants'
import axios from 'axios'
import { decodeToken } from 'react-jwt'

export const registerUser = (data) => {
  return (dispatch) => {
    return axios.post('/register', {
      ...data
    }).then(token => {
      localStorage.setItem('user', token.data)
      const user = decodeToken(token.data)
      return dispatch(userLoggedIn(user.data.profileUser))
    })
  }
}

export const userLoggedIn = (data) => {
  return {
    type: USER_LOGGED_IN,
    data
  }
}


export const logoutUser = () => {
  return {
    type: USER_LOGOUT
  }
}
