import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/mindfuls/DailyMindfuls'
import { Route } from 'react-router-dom';
import LoginContainer from './components/users/logincontainer'
import SignupContainer from './components/users/signupcontainer'
import { MindfulsWrapper } from './components/mindfuls/mindfulscontainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Grapptitude</h1>
          </div>
          <MindfulsWrapper />
        </div>
        <LoginContainer />
        <SignupContainer />
      </div>
    );
  }
}

export default App;
