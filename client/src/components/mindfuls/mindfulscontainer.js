import React, { Component } from 'react';
import DailyMindfuls from './DailyMindfuls'
import { fetchMindfuls } from '../../actions/mindfuls'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MindfulsContainer extends Component {

  componentDidMount(){
    this.props.fetchMindfuls();
  }

  render() {
    return (
      <div>
        <DailyMindfuls mindfuls={this.props.mindfuls}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mindfuls: state.mindfuls.mindfuls
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMindfuls: fetchMindfuls
  }, dispatch);
}

export const MindfulsWrapper = connect(mapStateToProps, mapDispatchToProps)(MindfulsContainer)
