/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions';
import '../styles/sign_in.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUsername = (event) => {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="signin-page">
        <h1>Welcome back!</h1>
        <form className="form">
          <input type="text" name="username" placeholder="Username" onChange={this.handleUsername} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePassword} />
          <div className="sign-button" onClick={() => { this.props.signinUser(this.state, this.props.history); }}>Sign In</div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
