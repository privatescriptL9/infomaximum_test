import React from 'react'
import '../../scss/components/layouts/AuthLayout.scss'
import logo from '../../images/logo.png'

const AuthLayout: React.FC = props => {
  return (
    <div className="AuthLayout">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="form">{props.children}</div>
      </div>
    </div>
  )
}

export default AuthLayout
