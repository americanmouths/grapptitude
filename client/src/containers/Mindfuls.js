import React, { Component } from 'react';
import DailyMindfuls from './../components/mindfuls/DailyMindfuls'
import { fetchMindfuls } from './../actions/mindfuls'
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

export const Mindfuls = connect(mapStateToProps, {fetchMindfuls})(MindfulsContainer)
