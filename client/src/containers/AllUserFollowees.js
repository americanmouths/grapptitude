import React, { Component } from 'react';
import Followees from './../components/greats/Followees';
import { fetchFollowees } from './../actions/greats';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { followUserAPI } from './../actions/greats';

class UserFolloweesContainer extends Component {

  componentDidMount(){
    this.props.fetchFollowees();
  }

  followFollowee = (userGreatId) => {
    const token = localStorage.getItem('token')
    this.props.followUserAPI(userGreatId, token)
  }

  render() {
    return (
      <div>
        <Followees followees={this.props.followees} followFollowee={this.followFollowee} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    followees: state.followees.followees
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFollowees: fetchFollowees,
    followUserAPI: followUserAPI
  }, dispatch);
}

export const UserFollowees = connect(mapStateToProps, mapDispatchToProps)(UserFolloweesContainer)
