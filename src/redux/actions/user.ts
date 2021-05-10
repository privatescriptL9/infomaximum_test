import { FETCH_CURRENT_USER, FETCH_FULL_NAME } from './actionsTypes'

export const fetchCurrentUser = (id: number) => {
  return {
    type: FETCH_CURRENT_USER,
    payload: id
  }
}

export const fetchFullName = (fullName: Array<string>) => {
  return {
    type: FETCH_FULL_NAME,
    payload: fullName
  }
}
