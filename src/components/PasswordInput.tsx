import classes from '../scss/components/Input.module.scss'
import '../scss/components/PasswordInput.scss'
import eyeOpened from '../images/eyeOpened.png'
import eyeClosed from '../images/eyeClosed.png'
import React, { useState } from 'react'
import { IObject } from '../interfaces'

interface PasswordInputProps {
  placeholder: string
  disabled?: boolean
  label?: string
  inputInfo: IObject
  meta: IObject
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  disabled,
  label,
  inputInfo,
  meta
}) => {
  const [type, setType] = useState<string>('password')
  const [eyeType, setEyeType] = useState<string>(eyeClosed)
  const eyeChangeHandler = () => {
    if (type === 'password') {
      setType('text')
      setEyeType(eyeOpened)
    } else {
      setType('password')
      setEyeType(eyeClosed)
    }
  }

  const htmlFor = `${label}-${Math.random()}`
  const cls = [classes.Input, 'PasswordInput']

  const hasError = meta.touched && meta.error

  if (hasError) {
    cls.push(classes.error)
  }

  return (
    <>
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}
      <div className="passwordInput__wrapper">
        <div className={cls.join(' ')}>
          <input
            id={htmlFor}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...inputInfo}
          />
          <img onClick={eyeChangeHandler} src={eyeType} alt="passwordEye" />
        </div>
        {(meta.error || meta.submitError) && meta.touched && (
          <span className="error">{meta.error || meta.submitError}</span>
        )}
      </div>
    </>
  )
}

export default PasswordInput
