import React, { type ChangeEvent, Component, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import validator from 'validator'

import { setCookie } from '../../utils/cookie_utils'

import './login.css'

const validateEmail = (value: string): boolean => {
  return validator.isEmail(value)
}

class LoginComponent extends Component {
  public state = { email: '', password: '', emailValidated: false, message: '' }

  public handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // Test if email valid
    if (validateEmail(this.state.email)) {
      const bodyLogin = new FormData()
      bodyLogin.append('email', this.state.email)
      bodyLogin.append('password', this.state.password)

      axios({
        method: 'post',
        url: 'login',
        data: bodyLogin,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(() => {
        // handle success
          setCookie('user_logged', 'true')
          const value = (<Navigate to="/home" />)
          this.setState({ message: value })
        })
        .catch((error) => {
        // handle error
          let value = ''
          if (error.response.status === 400) {
            value = 'Bad Credentials'
          } else {
            value = 'Server error try again'
          }
          this.setState({ message: value })
        })
    } else {
      const value = 'Email not valid'
      this.setState({ message: value })
    }
  }

  public handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.target.name]: e.target.value })
  }

  public render (): React.ReactNode {
    return (
      <div className="Login">
        <form onSubmit={this.handleLogin} className="login-form">
          <label className="label-input">
            Email
            <input type="text" value={this.state.email} onChange={this.handleChanges} name="email"/>
          </label>
          <label className="label-input">
            Password
            <input type="password" value={this.state.password} onChange={this.handleChanges} name="password"/>
          </label>
          <div className="messageDiv">
            { this.state.message }
          </div>
          <div className="btnDiv">
            <button type="submit" className="btnLogin">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginComponent
