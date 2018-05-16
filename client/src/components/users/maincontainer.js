import React, { Component } from 'react';
import Main from './main'
import { fetchUserGreats } from '../../actions/userGreats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserGreatsContainer extends Component {

  componentDidMount(){
    this.props.fetchUserGreats();
  }

  render() {
    return (
      <div>
        <Main userGreats={this.props.userGreats}/>
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

export const MainWrapper = connect(mapStateToProps, mapDispatchToProps)(UserGreatsContainer)
