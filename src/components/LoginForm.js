import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateLogin = e => {
    e.preventDefault()
    if (this.state.username.length >= 1 && this.state.password.length >= 1) {
      this.props.handleLogin(this.state)
    } else {
      return (console.log("please type something"))
    }
  }

  render() {
    return (
      <form onSubmit={this.validateLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInput} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInput} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
