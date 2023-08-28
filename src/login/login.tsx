import React, { Component, ReactNode } from 'react';
import './login.css';

class LoginComponent extends Component {
  public handleClick() {
    alert('You clicked me!');
  }

  public render() {
    return (    
    <div className="Login">
      Yo !
      <div>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    </div>
  )

  }
  public renderRow = () => {
    return(
      <div className="cell">
        Test
      </div>
    )
  }
}


export default LoginComponent;
