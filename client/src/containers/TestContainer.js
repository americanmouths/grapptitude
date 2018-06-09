import React, { Component } from 'react';
import FollowedUsers from './../components/greats/FollowedUsers';
import TestGreatContainer from './../components/greats/TestGreatContainer';
import { testFetchFollowedUsers } from './../actions/test';
import { testLikeUserGreat } from './../actions/test';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GreatContainer, Author, DateCreated, DailyGreatContent, HeaderStyle } from './../theme/style';
import { Glyphicon } from 'react-bootstrap/lib';


class TestContainer extends Component {

  componentDidMount(){
    this.props.testFetchFollowedUsers();
  }

  testLike = (userGreatId) => {
    const token = localStorage.getItem('token')
    this.props.testLikeUserGreat(userGreatId, token)
  }


  render() {
    return (
      <div>
        <TestGreatContainer users={this.props.users} like={this.testLike} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.test.dailygreats
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    testFetchFollowedUsers: testFetchFollowedUsers,
    testLikeUserGreat: testLikeUserGreat
  }, dispatch);
}

export const Test = connect(mapStateToProps, mapDispatchToProps)(TestContainer)
