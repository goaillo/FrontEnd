import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from '../login/login'; // Import a component from another file

import axios from 'axios';

// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .finally(function () {
//   // always executed
// });

// axios.post('/user', {
//   username: 'Fred',
//   email: 'test-react2@test.com',
//   password: 'je_passse'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// let bodyFormData = new FormData();
// bodyFormData.append('username', 'Fred');
// bodyFormData.append('email', 'test-react2@test.com');
// bodyFormData.append('password', 'je_passse');

// // form.append(item.name, fs.createReadStream(pathToFile));

// axios({
//   method: "post",
//   url: "user",
//   data: bodyFormData,
//   headers: { "Content-Type": "multipart/form-data" },
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });

// axios({
//   method: "get",
//   url: "logout",
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });

// let bodyPostNoLogin = new FormData();
// bodyPostNoLogin.append('name', 'TestPostNoLogin');
// bodyPostNoLogin.append('start_date', '2011-11-04T00:05:23');

// axios({
//   method: "post",
//   url: "post",
//   data: bodyPostNoLogin,
//   headers: { "Content-Type": "multipart/form-data" },
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });

// let bodyLogin = new FormData();
// bodyLogin.append('email', 'test-react2@test.com');
// bodyLogin.append('password', 'je_passse');

// axios({
//   method: "post",
//   url: "login",
//   data: bodyLogin,
//   headers: { "Content-Type": "multipart/form-data" },
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });

// let bodyPost = new FormData();
// bodyPost.append('name', 'TestPost');
// bodyPost.append('start_date', '2011-11-04T00:05:23');

// axios({
//   method: "post",
//   url: "post",
//   data: bodyPost,
//   headers: { "Content-Type": "multipart/form-data" },
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });

// axios({
//   method: "get",
//   url: "post",
// })
// .then(function (response) {
//   //handle success
//   console.log(response);
// })
// .catch(function (response) {
//   //handle error
//   console.log(response);
// });


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
