import React from 'react'

import LoginComponent from '../pages/login/login' // Import a component from another file

import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <div className="App-body">
        <LoginComponent/>
      </div>
    </div>
  )
}

export default App
