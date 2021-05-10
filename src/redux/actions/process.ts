import { PROCESS_LIST_RECEIVED } from './actionsTypes'
import { IProcess } from '../../interfaces'

export const parseProcessList = (payload: Array<IProcess>) => {
  return {
    type: PROCESS_LIST_RECEIVED,
    payload
  }
}
