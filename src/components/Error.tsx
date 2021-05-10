import React from 'react'
import '../scss/components/Error.scss'
import error from '../images/error.png'

interface ErrorProp {
  message: string
}

const Error: React.FC<ErrorProp> = ({ message = 'Сообщение об ошибке' }) => (
  <div className="Error">
    <img src={error} alt="error" />
    {message}
  </div>
)

export default Error
