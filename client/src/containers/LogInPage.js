import React, {Component} from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/userAuthorization';

class LogInPage extends Component {
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
    this.props.loginUser(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.token) {
      this.props.history.push('/home')
    } else {
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <h2>Log In</h2>
        <form>
            <input
              type="username"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="password"
            />
          <button onClick={this.handleSubmit}> Login </button>
          </form>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, {loginUser})(LogInPage);
