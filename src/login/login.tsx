import React from "react";
import { Component, FormEvent, ChangeEvent } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import './login.css';
import validator from 'validator'

const validateEmail = (value: string) => {
  return validator.isEmail(value);
}

class LoginComponent extends Component {
  public state = {email: "tamere", password: "", emailValidated: false, errorMessage: ""}

  public handleLogin = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Test if email valid
    if (validateEmail(this.state.email)) {
      let bodyLogin = new FormData();
      bodyLogin.append("email", this.state.email)
      bodyLogin.append("password", this.state.password)

      let componentContext = this;
  
      axios({
        method: "post",
        url: "login",
        data: bodyLogin,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        //handle success
        let value = (<Navigate to="/home" replace={true} />);
        componentContext.setState({errorMessage : value});
      })
      .catch(function (response) {
        //handle error
        let value = (
          <div>
            Didn't workd
          </div>
        )
        componentContext.setState({errorMessage : value});
      });
    } else {
      let value = (
        <div>
          Email not good man
        </div>
      )
      this.setState({errorMessage : value});
    }
  }

  public handleChanges = (e : ChangeEvent<HTMLInputElement>) => {
    this.setState({[e.target.name] : e.target.value});
  }

  public render() {

    return (
      <div className="Login">
        <form onSubmit={this.handleLogin}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChanges} name="email"/>
          </label>
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChanges} name="password"/>
          </label>
          { this.state.errorMessage }
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginComponent;
