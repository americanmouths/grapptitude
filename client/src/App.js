import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import { Home } from './containers/Home';
import { Greats } from './containers/Greats';
import { Likes } from './containers/AllUserLikes';
import { Users } from './containers/FollowedUsers';

class App extends Component {

  render() {
    return (
    <Router>
      <div>
          <NavBar />
        <Switch>
          <Route exact path="/" component={Greats} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/liked_posts" component={Likes} />
          <Route exact path="/followed_users" component={Users} />
        </Switch>

      </div>
    </Router>
    );
  }
}

export default App;
