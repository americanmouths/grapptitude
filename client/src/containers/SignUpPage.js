import React, { Component } from "react";
import { signUpUser } from './../actions/userAuthorization';
import { connect } from 'react-redux';
import { FormContainer, AuthErrors } from './../theme/style';

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
    };

    if (props.errors) {
      this.setState({
        username: '',
        password: ''
      });
    } else {
      this.setState({
        username: '',
        password: ''
      });
    }
  }


  render() {
    const { username, password } = this.state
    const errors = this.props.errors

    return (
      <div className="row">
        <div className="col-md-4">
        </div>

        <div className="col-md-4">
          <h2>Sign Up</h2>
          {errors ? <AuthErrors>{errors.user}</AuthErrors> : null}
          <FormContainer>
            <form>
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
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </FormContainer>
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
    errors: state.userAuth.errors
  }
}

export default connect(mapStateToProps, {signUpUser})(SignUpPage);
