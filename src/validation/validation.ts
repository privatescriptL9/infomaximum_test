import { validateEmail } from '../utils/utils'

export function required(value: string) {
  if (!value) {
    return 'Произошла ошибка. Поле должно быть заполнено'
  }
}

export function isEmail(value: string) {
  if (!validateEmail(value)) {
    return 'Поле должно быть типом E-mail'
  }
}

export function minLength(value: string) {
  if (value) {
    if (value.length < 6) {
      return 'Минимальная длинна пароля 6 символов'
    }
  }
}

export function composeValidators(...validators: Array<Function>) {
  return function (value: string) {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )
  }
}
