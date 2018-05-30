import React, { Component } from 'react';
import Followees from './../components/greats/Followees'
import { fetchFollowees } from './../actions/greats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class UserFolloweesContainer extends Component {

  componentDidMount(){
    this.props.fetchFollowees();
  }

  render() {
    return (
      <div>
        <Followees followees={this.props.followees}/>
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
  }, dispatch);
}

export const UserFollowees = connect(mapStateToProps, mapDispatchToProps)(UserFolloweesContainer)
