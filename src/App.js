import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from './components/ChangeColor';
import People from './components/People';

function App() {

  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <People />
    </div>
  );
}

export default App;
