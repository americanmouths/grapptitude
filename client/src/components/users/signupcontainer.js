import React, { Component } from "react";
import { signup } from './signup';

export default class SignupContainer extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const signUpParams = {
      email: this.state.email,
      password: this.state.password
    }

    signup(signUpParams).then((user) => {
    localStorage.setItem("id", user.id)
  }).then(console.log("signed up"))
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
        <h2>Sign up</h2>
          <form>
            <input type="text" name="email" placeholder="Email" onChange={this.handleEmail} value={this.state.email}/>
            <br />
            <input type="password" name="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password}/>
              <button onClick={this.handleSubmit}> Signup </button>
            <br />
          </form>
        </div>
    );
  }
}
