import React from 'react'
import classes from '../scss/components/Button.module.scss'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  style?: object
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={classes.Button}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  )
}

export default Button
