import React, { type ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { deleteCookie, getCookie } from '../utils/cookie_utils'

const AuthRequiredRoute = (props: { children: ReactElement }): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const checkUserToken = (): void => {
    const userToken = getCookie('user_logged')
    if ((userToken == null) || userToken === 'undefined') {
      setIsLoggedIn(false)
      // Logout from BackEnd
      deleteCookie('session')
      deleteCookie('user_logged')
      axios({
        method: 'get',
        url: 'logout'
      })
        .then(function () {
          navigate('/login')
        })
        .catch(function (error) {
          console.error(error)
          navigate('/login')
        })
    }
    setIsLoggedIn(true)
  }
  useEffect(() => {
    checkUserToken()
  }, [isLoggedIn])

  return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
  )
}

export default AuthRequiredRoute
