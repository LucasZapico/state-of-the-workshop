import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmmit} className="">
          <h4 className="color-grey-m">Sign In</h4>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              placeholder="password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div id="submit" className="input-field">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
