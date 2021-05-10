import { FETCH_CURRENT_USER, FETCH_FULL_NAME } from '../actions/actionsTypes'

const initialState = {
  currentUser: null,
  firstName: null,
  secondName: null
}

export default function userReducer(
  state = initialState,
  action: { type: string; payload: Array<string> }
) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case FETCH_FULL_NAME:
      return {
        ...state,
        firstName: action.payload[0],
        secondName: action.payload[1]
      }
    default:
      return state
  }
}
