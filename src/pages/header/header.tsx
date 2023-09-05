import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { deleteCookie } from '../../utils/cookie_utils'

import './header.css'

class LoginHeader extends Component {
  public state: any = { username: '', redirect: '' }

  public goHome = (e: React.MouseEvent<HTMLElement>): void => {
    this.setState({ redirect: (<Navigate to="/home" />) })
  }

  public logoutUser = (e: React.MouseEvent<HTMLElement>): void => {
    axios({
      method: 'get',
      url: 'logout'
    })
      .then(() => {
        deleteCookie('session')
        deleteCookie('user_logged')
        this.setState({ redirect: (<Navigate to="/login" />) })
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  public render (): React.ReactNode {
    return (
      <div className="LoginHeader">
        { this.state.redirect }
        <div className='headerBody'>
          <div className='UserName' onClick={this.goHome}>
            { this.state.username }
            Test
          </div>
          <div className='LogoutDiv' onClick={this.logoutUser}>
            Logout
            <img src="/logout.svg" alt="Logout Svg" className='LogoutSvg' />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginHeader
