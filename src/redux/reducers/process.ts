import { PROCESS_LIST_RECEIVED } from '../actions/actionsTypes'
import { IProcess } from '../../interfaces'

const initialState = {
  processList: []
}

export default function processReducer(
  state = initialState,
  action: { type: string; payload: IProcess }
) {
  switch (action.type) {
    case PROCESS_LIST_RECEIVED:
      return {
        ...state,
        processList: action.payload
      }
    default:
      return state
  }
}
