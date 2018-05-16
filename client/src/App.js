import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/mindfuls/DailyMindfuls'
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './components/users/logincontainer';
import SignupContainer from './components/users/signupcontainer';
import { MindfulsWrapper } from './components/mindfuls/mindfulscontainer';
import NavBar from './components/header/navbar';
import { GreatsWrapper } from './components/greats/dailygreatscontainer';
import { MainWrapper } from './components/users/maincontainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Grapptitude</h1>
          </div>
          <NavBar />
        </div>
        <div className="Mindful-header">
          Daily Mindful: <MindfulsWrapper />
        </div>
        <div className="App-routes">
          <Route exact path="/" component={GreatsWrapper} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/logged_in" component={MainWrapper} />
        </div>
      </div>
    );
  }
}

export default App;
