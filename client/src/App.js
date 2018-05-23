import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/headers/Header';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import { Home } from './containers/Home';
import { Greats } from './containers/Greats';

class App extends Component {

  render() {
    return (
    <Router>
      <div>
          <Header />
          <NavBar />
        <Switch>
          <Route exact path="/" component={Greats} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/home" component={Home} />
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
