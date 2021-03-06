import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../actions/authActions'

const initialState = {
  fetching: false,
  error: null,
  loading: true,
  loggingIn: false,
  creating: false,
  token: localStorage.getItem('token')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log('Auth reducer state', state)
      console.log('Auth reducer action', action)
      return {
        ...state,
        loggingIn: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        error: null
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        token: null
      }
    case REGISTER_START:
      console.log('Auth reducer state', state)
      console.log('Auth reducer action', action)
      return {
        ...state,
        creating: true,
        error: null
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        creating: false,
        error: null,
        token: localStorage.getItem('token')
      }
    case REGISTER_ERROR:
      return {
        ...state,
        creating: false,
        error: action.payload
      }
    default:
      return state
  }
}
