import React, { Component } from 'react';
import DailyGreats from './DailyGreats'
import { fetchGreats } from '../../actions/greats'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DailyGreatsContainer extends Component {

  componentDidMount(){
    this.props.fetchGreats();
  }

  render() {
    return (
      <div>
        <DailyGreats greats={this.props.greats}/>
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

export const GreatsWrapper = connect(mapStateToProps, mapDispatchToProps)(DailyGreatsContainer)
