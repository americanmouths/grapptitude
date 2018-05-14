import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/mindfuls/DailyMindfuls'
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './components/users/logincontainer';
import SignupContainer from './components/users/signupcontainer';
import { MindfulsWrapper } from './components/mindfuls/mindfulscontainer';
import NavBar from './components/header/navbar';
import { GreatsWrapper } from './components/greats/dailygreatscontainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Grapptitude</h1>
          </div>
        </div>
        <div className="Mindful-header">
          Daily Mindful: <MindfulsWrapper />
        </div>
        {/* <LoginContainer /> */}
        {/* <SignupContainer /> */}
        <GreatsWrapper />
      </div>
    );
  }
}

export default App;
