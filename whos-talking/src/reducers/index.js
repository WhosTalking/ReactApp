import { combineReducers } from 'redux'
import authReducer from './authReducer'
import groupReducer from './groupReducer'

export default combineReducers({
  user: authReducer,
  group: groupReducer
})
