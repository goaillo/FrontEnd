import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import './postCreate.css';
import LoginHeader from '../header/header';

class CreatePost extends Component {
  public state = {
    name: "", 
    start_date: new Date().toISOString().split('T')[0],
    end_date: "", 
    message: "",
    image : null,
    image_name : "",
  }

  public handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var bodyLogin = new FormData();
 
    // Update the formData object
    if (this.state.image != null) {
      bodyLogin.append(
        "inputFile",
        this.state.image,
        this.state.image_name
      );
    }

    bodyLogin.append("name", this.state.name);

    bodyLogin.append(
      "start_date",
      new Date(this.state.start_date).toISOString().replace('Z', ''),
    );

    if (this.state.end_date != "") {
      bodyLogin.append(
        "end_date",
        new Date(this.state.end_date).toISOString().replace('Z', ''),
      );
    }

    let componentContext = this;

    axios({
      method: "post",
      url: "post",
      data: bodyLogin,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(function () {
      //handle success
      const value = (<Navigate to="/home" replace={true} />);
      componentContext.setState({message : value});
    })
    .catch(function (error) {
      //handle error
      let value = ""
      if (error.response.status == 400) {
        value = "Bad Credentials";
      } else {
        value = "Server error try again";
      }
      componentContext.setState({message : value});
    });
  };

  public handleChanges = (e : ChangeEvent<HTMLInputElement>) => {
    this.setState({[e.target.name] : e.target.value});
  }

  public onFileChange = (e : ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    this.setState({ image: e.target.files[0] });
    this.setState({ image_name: e.target.files[0].name });
  };

  public render() {
    return (
      <div className="CreatePost">
        <LoginHeader/>
        <div className='bodyCreatePost'>
          <div className="PostFormDiv">
            <form onSubmit={this.handleSubmit} className="login-form">
              <label className="label-input">
                Name
                <input type="text" value={this.state.name} onChange={this.handleChanges} name="name"/>
              </label>
              <label className="label-input">
                Starting Date
                <input type="date" value={this.state.start_date} onChange={this.handleChanges} name="start_date"/>
              </label>
              <label className="label-input">
                End Date (Optionnal) 
                <input type="date" value={this.state.end_date} onChange={this.handleChanges} name="end_date"/>
              </label>
              <label className="label-input">
                Image
                <input type="file" onChange={this.onFileChange} name="image"/>
              </label>
              <div className="messageDiv">
                { this.state.message }
              </div>
              <div className="btnDiv">
                <button type="submit" className="btnCreate">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default CreatePost;
