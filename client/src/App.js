import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import './App.css'; */
import './theme/globalStyles.js';
import NavBar from './containers/NavBar';
import LogInPage from './containers/LogInPage';
import SignUpPage from './containers/SignUpPage';
import { UsersHome } from './containers/UsersHome';
import { AllAppGreats } from './containers/AllAppGreats';
import { Likes } from './containers/AllUserLikes';
import { AllUserGreats } from './containers/AllUserGreats';
import { UserFollowees } from './containers/AllUserFollowees';
import { Paragraph } from './theme/style.js';
import styled from 'styled-components';


class App extends Component {

  render() {
    return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/*<Route exact path="/" component={AllAppGreats} />*/}
          <Route exact path="/main" component={AllAppGreats} />
          <Route exact path="/home" component={UsersHome} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/daily_great/liked" component={Likes} />
          <Route exact path="/daily_great/new" component={AllUserGreats} />
          <Route exact path="/following" component={UsersHome} />
          <Route exact path="/followees" component={UserFollowees} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
