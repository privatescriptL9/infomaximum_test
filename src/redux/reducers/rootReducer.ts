import { combineReducers } from 'redux'
import userReducer from './user'
import processReducer from './process'

export default combineReducers({
  user: userReducer,
  process: processReducer
})
