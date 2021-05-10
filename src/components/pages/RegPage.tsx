import { Link } from 'react-router-dom'
import '../../scss/components/pages/RegPage.scss'
import Button from '../Button'
import Error from '../Error'
import { Form } from 'react-final-form'
import { isEmail, minLength, required } from '../../validation/validation'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../graphql/mutations/user'
import React, { useState } from 'react'
import { renderPasswordFields, renderTextFields } from '../../utils/utils'

export const RegPage: React.FC = () => {
  const [statusError, setStatusError] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [signup] = useMutation(SIGN_UP)

  const textInputs = [
    {
      name: 'name',
      validators: [required],
      placeholder: 'Имя',
      type: 'text'
    },
    {
      name: 'lastName',
      validators: [required],
      placeholder: 'Фамилия',
      type: 'text'
    },
    {
      name: 'email',
      validators: [required, isEmail],
      placeholder: 'Электронная почта',
      type: 'email'
    }
  ]

  const passwordInputs = [
    {
      name: 'password',
      validators: [required, minLength],
      placeholder: 'Пароль'
    },
    {
      name: 'confirmPassword',
      validators: [required],
      placeholder: 'Повторите пароль'
    }
  ]

  return (
    <>
      <Form
        onSubmit={values => {
          signup({
            variables: {
              firstName: values.name,
              secondName: values.lastName,
              email: values.email,
              password: values.password
            }
          })
            .then(({ data }) => {
              sessionStorage.setItem('token', data.signup)
              window.location.reload()
            })
            .catch(error => {
              setError(error.message)
              setStatusError(true)
              Object.keys(values).forEach(key => {
                values[key] = null
              })
            })
        }}
        validate={values => {
          const error: { [k: string]: string } = {}
          if (values.confirmPassword !== values.password) {
            error.confirmPassword = 'Пароли не совпадают'
            return error
          }
        }}
      >
        {({ handleSubmit, submitting, pristine }) => (
          <form className="RegPage" onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            {renderTextFields(textInputs)}
            {renderPasswordFields(passwordInputs)}
            <Button style={{ margin: '10px 0 18px 0' }}>
              Применить и войти
            </Button>
            <span>
              Уже зарегистрированы?<Link to="/auth"> Вход</Link>
            </span>
          </form>
        )}
      </Form>
      {statusError ? <Error message={error} /> : null}
    </>
  )
}

export default RegPage
