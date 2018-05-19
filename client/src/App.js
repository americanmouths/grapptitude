import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/headers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpContainer from './containers/SignUpPage';
import { Home } from './containers/Home';
import { Mindfuls } from './containers/Mindfuls';
import { Greats } from './containers/Greats';

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Grapptitude</h1>
          </div>
          <NavBar />
        </div>

        <div className="Mindful-header">
          Daily Mindful: <Mindfuls />
        </div>

        <Switch>
          <Route exact path="/" component={Greats} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/home" component={Home} />
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
