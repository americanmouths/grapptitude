import React, { Component } from 'react';
import UserGreats from './../components/greats/UserGreats'
import { NewUserGreat } from './NewUserGreat'
import { fetchUserGreats } from './../actions/userGreats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchUserGreats();
  }

  render() {
    return (
      <div>
        <NewUserGreat />
        <UserGreats userGreats={this.props.userGreats}/>
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
    fetchUserGreats: fetchUserGreats
  }, dispatch);
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
