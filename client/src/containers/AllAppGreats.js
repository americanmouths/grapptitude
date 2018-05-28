import React, { Component } from 'react';
import AllGreats from './../components/greats/AllGreats'
import { fetchGreats, likeUserGreatFromAPI, followUserAPI } from './../actions/greats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../components/headers/Header';

class AllGreatsContainer extends Component {

  componentDidMount(){
    this.props.fetchGreats();
  }

  likeUserGreat = (userGreatId) => {
    const token = localStorage.getItem('token')
    this.props.likeUserGreatFromAPI(userGreatId, token)
  }

  followUser = (userGreatId) => {
    const token = localStorage.getItem('token')
    this.props.followUserAPI(userGreatId, token)
  }


  render() {
    return (
      <div>
        <Header />
        <AllGreats greats={this.props.greats} likeUserGreat={this.likeUserGreat} followUser={this.followUser} errors={this.props.errors} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greats: state.greats.greats,
    errors: state.greats.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGreats: fetchGreats,
    likeUserGreatFromAPI: likeUserGreatFromAPI,
    followUserAPI: followUserAPI
  }, dispatch);
}

export const AllAppGreats = connect(mapStateToProps, mapDispatchToProps)(AllGreatsContainer)
