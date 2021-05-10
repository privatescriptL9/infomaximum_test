export interface ILink {
  to: string
  activeClassName: string
  onClick: () => void
  label: string
  icon: string
}

export interface IField {
  name: string
  validators: Array<Function>
  placeholder: string
  type?: string
  label?: string
}

export interface IProcess {
  id?: number
  name: string
  numberOfExecutions: number
  averageLeadTime: string
  averageActiveTime: string
  employeesInvolvedProcess: number
  numberOfScenarios: number
  start: number
  end: number
  loading: number
}

export interface IAction {
  type: string
  payload: any
}

export interface IObject {
  [k: string]: any
}
