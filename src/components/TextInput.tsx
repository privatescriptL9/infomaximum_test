import React from 'react'
import { IObject } from '../interfaces'
import classes from '../scss/components/Input.module.scss'
import '../scss/components/TextInput.scss'

interface TextInputProps {
  placeholder: string
  disabled?: boolean
  label?: string
  type?: string
  inputInfo: IObject
  meta: IObject
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  disabled,
  label,
  type,
  inputInfo,
  meta
}) => {
  const htmlFor = `${label}-${Math.random()}`
  const inputType = type || 'text'
  const cls = [classes.Input, 'TextInput']

  const hasError = meta.touched && meta.error

  if (hasError) {
    cls.push(classes.error)
  }

  return (
    <>
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}
      <div className="textInput__wrapper">
        <div className={cls.join(' ')}>
          <input
            id={htmlFor}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            {...inputInfo}
          />
        </div>
        {(meta.error || meta.submitError) && meta.touched && (
          <span className="error">{meta.error || meta.submitError}</span>
        )}
      </div>
    </>
  )
}

export default TextInput
