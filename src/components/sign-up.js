/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

  handleName = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form>
        Name:
        <input type="text" name="name" onChange={this.handleName} />
        Username:
        <input type="text" name="username" onChange={this.handleUsername} />
        Password:
        <input type="text" name="password" onChange={this.handlePassword} />
        <div className="sign-button" onClick={() => { this.props.signupUser(this.state, this.props.history); }}>Sign Up</div>
      </form>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
