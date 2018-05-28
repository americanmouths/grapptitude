import React, { Component } from 'react';
import FollowedUsers from './../components/greats/FollowedUsers'
import { fetchFollowedUsers } from './../actions/greats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class FollowedUsersContainer extends Component {

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFollowedUsers: fetchFollowedUsers,
  }, dispatch);
}

export const Users = connect(mapStateToProps, mapDispatchToProps)(FollowedUsersContainer)