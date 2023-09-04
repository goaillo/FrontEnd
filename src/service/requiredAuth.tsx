import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from "../utils/cookie_utils";
import axios from 'axios';

const AuthRequiredRoute = (props:{ children: ReactElement }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const checkUserToken = () => {
        const userToken = getCookie('user_logged');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            // Logout from BackEnd
            axios({
                method: "get",
                url: "logout",
              })
              .then(function () {
                return navigate('/login');
              })
              .catch(function (error) {
                console.error(error)
                return navigate('/login');
            });
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
    
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default AuthRequiredRoute;