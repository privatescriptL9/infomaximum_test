import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { composeValidators } from '../validation/validation'
import { Field } from 'react-final-form'
import { IField } from '../interfaces'
import moment from 'moment'
import 'moment/locale/ru'

// Render Authentication and Registation Fields
export const renderTextFields = (fields: Array<IField>) => {
  return fields.map((field, index) => {
    return (
      <Field
        key={field.name + index}
        name={field.name}
        validate={composeValidators(...field.validators)}
      >
        {({ input, meta }) => (
          <div className="wrapper">
            <TextInput
              placeholder={field.placeholder}
              type={field.type}
              label={field.label}
              inputInfo={input}
              meta={meta}
            />
          </div>
        )}
      </Field>
    )
  })
}

export const renderPasswordFields = (fields: Array<IField>) => {
  return fields.map((field, index) => (
    <Field
      key={field.name + index}
      name={field.name}
      validate={composeValidators(...field.validators)}
    >
      {({ input, meta }) => (
        <div className="wrapper">
          <PasswordInput
            placeholder={field.placeholder}
            label={field.label}
            inputInfo={input}
            meta={meta}
          />
        </div>
      )}
    </Field>
  ))
}

// Revers values to moment-values
export const milisecondsToTime = (time: string) => {
  const tempTime = moment.duration(+time)
  return `
    ${tempTime.hours() === 0 ? '' : `${tempTime.hours()} ч`} 
    ${tempTime.minutes() === 0 ? '' : `${tempTime.minutes()} мин`}
  `
}

export const milisecondsToAverageActiveTime = (
  averageActiveTime: string,
  averageLeadTime: string
) => {
  return `${milisecondsToTime(averageActiveTime)} (${(
    (Number(averageActiveTime) / Number(averageLeadTime)) *
    100
  )
    .toFixed(1)
    .replace('.', ',')}%)`
}

export const milisecondsToDate = (miliseconds: number) => {
  return moment(miliseconds * 1000).format('D MMMM YYYY')
}

export const prettifyNumberOfExecutions = (numberOfExecutions: number) => {
  const separator = ' '
  return numberOfExecutions
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + separator)
}

// Validate email
export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
