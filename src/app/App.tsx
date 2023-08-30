import React from 'react';
import './App.css';
import LoginComponent from '../pages/login/login'; // Import a component from another file

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <LoginComponent/>
      </div>
    </div>
  );
}

export default App;
