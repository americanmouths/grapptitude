import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/DailyMindfuls'
import { fetchMindfuls } from './actions/mindfuls'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginContainer from './components/users/logincontainer'
import SignupContainer from './components/users/signupcontainer'
import { MindfulsWrapper } from './components/mindfuls/mindfulscontainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Grapptitude</h1>
        </div>
        <MindfulsWrapper />
        <LoginContainer />
        <SignupContainer />
      </div>
    );
  }
}

export default App;
