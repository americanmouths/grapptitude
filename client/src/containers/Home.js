import React, { Component } from 'react';
import UserGreats from './../components/greats/UserGreats'
import { NewUserGreat } from './NewUserGreat'
import { fetchUserGreats, deleteUserGreatFromAPI } from './../actions/userGreats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchUserGreats();
  }

  deleteUserGreat = (userGreatId) => {
    const token = localStorage.getItem('token')
    this.props.deleteUserGreatFromAPI(userGreatId, token)
  }

  render() {
    return (
      <div>
        <NewUserGreat />
        <UserGreats userGreats={this.props.userGreats} deleteUserGreat={this.deleteUserGreat}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGreats: state.userGreats.userGreats
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUserGreats: fetchUserGreats,
    deleteUserGreatFromAPI: deleteUserGreatFromAPI
  }, dispatch);
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
