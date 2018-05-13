import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyMindfuls from './components/DailyMindfuls'
import { fetchMindfuls } from './actions/mindfuls'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginContainer from './components/users/logincontainer'
import SignupContainer from './components/users/signupcontainer'


class App extends Component {

  componentDidMount(){
    this.props.fetchMindfuls();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Grapptitude</h1>
        </div>
        <DailyMindfuls mindfuls={this.props.mindfuls}/>
        <LoginContainer />
        <SignupContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mindfuls: state.mindfuls.mindfuls
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMindfuls: fetchMindfuls
  }, dispatch);
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
