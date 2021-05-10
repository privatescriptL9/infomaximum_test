import { Link } from 'react-router-dom'
import '../../scss/components/pages/AuthPage.scss'
import Button from '../Button'
import Error from '../Error'
import { Form } from 'react-final-form'
import { isEmail, minLength, required } from '../../validation/validation'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../graphql/mutations/user'
import { useState } from 'react'
import { renderPasswordFields, renderTextFields } from '../../utils/utils'
import { IField } from '../../interfaces'

export const AuthPage: React.FC = () => {
  const [statusError, setStatusError] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [login] = useMutation(LOGIN)

  const textInputs: Array<IField> = [
    {
      name: 'email',
      validators: [required, isEmail],
      placeholder: 'Электронная почта',
      type: 'email'
    }
  ]

  const passwordInputs: Array<IField> = [
    {
      name: 'password',
      validators: [required, minLength],
      placeholder: 'Пароль'
    }
  ]

  return (
    <>
      <Form
        onSubmit={values => {
          login({
            variables: {
              email: values.email,
              password: values.password
            }
          })
            .then(({ data }) => {
              sessionStorage.setItem('token', data.login.token)
              window.location.reload()
            })
            .catch(error => {
              setError(error.message)
              setStatusError(true)
              Object.keys(values).forEach(key => {
                values[key] = ''
              })
            })
        }}
      >
        {({ handleSubmit, submitting, pristine }) => (
          <form className="AuthPage" onSubmit={handleSubmit}>
            {renderTextFields(textInputs)}
            {renderPasswordFields(passwordInputs)}
            <Button style={{ marginTop: 10 }}>Войти в систему</Button>
            <Link to="/reg">Зарегистрироваться</Link>
          </form>
        )}
      </Form>
      {statusError ? <Error message={error} /> : null}
    </>
  )
}

export default AuthPage
