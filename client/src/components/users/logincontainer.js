import React, { Component } from "react";
import { login } from './login';

export default class LoginContainer extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const loginParams = {
      email: this.state.email,
      password: this.state.password
    }

    login(loginParams).then((user) => {
    localStorage.setItem("jwtToken", user.jwt)
    localStorage.setItem("id", user.id)
  }).then( this.props.history.push('/logged_in'))
}

handleEmail = (event) => {
  this.setState({email: event.target.value})
}

handlePassword = (event) => {
  this.setState({password: event.target.value})
}

  render() {
    return (
        <div>
          <h2>Log in</h2>
          <form>
            <input type="text" name="email" placeholder="Email" onChange={this.handleEmail} value={this.state.email}/>
            <br />
            <input type="password" name="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password}/>
              <button onClick={this.handleSubmit}> Login </button>
            <br />
          </form>
        </div>
    );
  }
}
