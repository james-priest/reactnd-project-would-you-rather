import React, { Component } from 'react';

export class Login extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onLogin();
  };
  render() {
    return (
      <div>
        <h3>Login</h3>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default Login;
