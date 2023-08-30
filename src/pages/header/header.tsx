import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import './header.css';

class LoginHeader extends Component {
  public state : any = {username: '', redirect: ''};

  public goHome = (e : React.MouseEvent<HTMLElement>) => {
    this.setState({redirect : (<Navigate to="/home" replace={true} />)});
  };

  public render() {
    return (
      <div className="LoginHeader">
        { this.state.redirect }
        <div className='headerBody'>
          <div className='UserName' onClick={this.goHome}>
            { this.state.username }
            Test
          </div>
          <div className='LogoutDiv'>
            Logout
            <img src="/logout.svg" alt="Logout Svg" className='LogoutSvg' />
          </div>
        </div>
      </div>
    )
  }
}


export default LoginHeader;
