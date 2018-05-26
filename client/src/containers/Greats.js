import React, { Component } from 'react';
import AllGreats from './../components/greats/AllGreats'
import { fetchGreats } from './../actions/greats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../components/headers/Header';

class AllGreatsContainer extends Component {

  componentDidMount(){
    this.props.fetchGreats();
  }

  render() {
    return (
      <div>
        <Header />
        <AllGreats greats={this.props.greats}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greats: state.greats.greats
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGreats: fetchGreats
  }, dispatch);
}

export const Greats = connect(mapStateToProps, mapDispatchToProps)(AllGreatsContainer)
