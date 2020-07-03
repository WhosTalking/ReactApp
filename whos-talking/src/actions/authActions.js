import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const login = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('/login', creds)
    .then((response) => {
      console.log('login response', response)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.user.id)
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token })
    })
    .catch((error) => {
      console.log('login error.response', error.response)
      dispatch({ type: LOGIN_ERROR, payload: error.response })
    })
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const registerAccount = (creds) => (dispatch) => {
  console.log(creds)
  dispatch({ type: REGISTER_START })
  return axios
    .post('/register', creds)
    .then((response) => {
      console.log('registerAccount response', response)
      localStorage.setItem('token', response.data.payload)
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.payload })
    })
    .catch((error) => {
      console.log('registerAccount error.response', error.response)
      dispatch({ type: REGISTER_ERROR, payload: error.response.data.error })
    })
}
