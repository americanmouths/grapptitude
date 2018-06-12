import React, { Component } from 'react';
import AllUserLikes from './../components/greats/AllUserLikes';
import { fetchUserLikes } from './../actions/greats';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AllUserLikesContainer extends Component {

  componentDidMount(){
    this.props.fetchUserLikes();
  }

  render() {
    return (
      <div>
        <AllUserLikes likes={this.props.likes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.greats.likes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUserLikes: fetchUserLikes
  }, dispatch);
}

export const Likes = connect(mapStateToProps, mapDispatchToProps)(AllUserLikesContainer)
