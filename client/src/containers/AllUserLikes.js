import React, { Component } from 'react';
import AllUserLikes from './../components/greats/AllUserLikes'
import { fetchUserLikes } from './../actions/greats'
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
    likes: state.likes.likes
  }
}


export const Likes = connect(mapStateToProps, {fetchUserLikes})(AllUserLikesContainer)
