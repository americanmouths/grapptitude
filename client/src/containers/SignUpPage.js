import React, { Component } from "react";
import { signUpUser } from './../actions/userAuthorization';
import { connect } from 'react-redux'

class SignUpPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  componentWillReceiveProps(props) {
    if (!!props.token) {
      this.props.history.push('/home')
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="row">
        <div className="col-md-4">
        </div>

        <div className="col-md-4">
          <h2 className="Sign-Up">Sign Up</h2>
            <form className="Sign-Up-Form">
              <input
                type="username"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="username"
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="password"
              />
              <br />
              <br />
              <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="col-md-4">
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.userAuth.token,
  }
}

export default connect(mapStateToProps, {signUpUser})(SignUpPage);
