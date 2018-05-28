import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../actions/userAuthorization';

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
    };

    if (nextProps.errors) {
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
          <h2 className="Login">Log In</h2>
            <form className="Login-Form">
              <input
                type="username"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="username"
              />
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
            {errors ? <div className="Login-Errors">{errors.user}</div> : null}
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

export default connect(mapStateToProps, {loginUser})(LogInPage);
