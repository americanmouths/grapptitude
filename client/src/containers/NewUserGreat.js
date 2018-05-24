import React, {Component} from 'react';
import { connect } from 'react-redux';
import { newUserGreat } from './../actions/userGreats';
import { bindActionCreators } from 'redux';

class NewUserGreatContainer extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newUserGreat(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.token) {
      this.props.history.push('/home')
    } else {
      this.setState({
        content: '',
      });
    }
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-4">
        </div>

        <div className="col-md-4">
          <br />
          <form onSubmit={(event) => this.handleSubmit(event)} className="New-User-Great">
            <textarea
              rows="3"
              cols="40"
              type="text"
              name="content"
              value={this.state.content}
              onChange={(event) => this.handleChange(event)}
              placeholder="I'm thankful for..."
              className="User-Great-Text-Area"
            />
            <br />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="col-md-4">
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userGreats: state.userGreats
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newUserGreat: newUserGreat
  }, dispatch);
}

export const NewUserGreat = connect(mapStateToProps, mapDispatchToProps)(NewUserGreatContainer)
