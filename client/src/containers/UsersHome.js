import React, { Component } from 'react';
import FollowedUsers from './../components/greats/FollowedUsers'
import { fetchFollowedUsers } from './../actions/greats'
import { connect } from 'react-redux';


class UsersHomeContainer extends Component {

  componentDidMount(){
    this.props.fetchFollowedUsers();
  }

  render() {
    return (
      <div>
        <FollowedUsers users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.followedUsers.followedUsers
  }
}

export const UsersHome = connect(mapStateToProps, { fetchFollowedUsers })(UsersHomeContainer)
