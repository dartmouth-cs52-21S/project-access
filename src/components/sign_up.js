/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { signupUser } from '../actions';
import '../style.scss';

class signUp extends Component {
  constructor(props) {
    super(props);

    this.user = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmpassword: null,
    };
  }

  componentDidMount() {
    this.user = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmpassword: null,
    };
  }

  OnInputChangeEmail = (event) => {
    this.user = { ...this.user, email: event.target.value };
  }

  OnInputChangePassword = (event) => {
    this.user = { ...this.user, password: event.target.value };
  }

  OnInputChangeFirstname = (event) => {
    this.user = { ...this.user, firstname: event.target.value };
  }

  OnInputChangeLastname = (event) => {
    this.user = { ...this.user, lastname: event.target.value };
  }

  submitinfo = () => {
    // this.props.signupUser(this.user, this.props.history);
    if (this.user.confirmpassword === this.user.password) {
      console.log(this.user);
    } else {
      console.log(`${this.user.password} is not equal to ${this.user.confirmpassword}`);
    }
  }

  OnInputChangeConfirm = (event) => {
    this.user = { ...this.user, confirmpassword: event.target.value };
  }

  render() {
    let ERROR = null;
    if (this.props.autherr === 'Error: You must provide an email, password, and username') {
      ERROR = 'Error: You must provide an email, password, and username';
    } else if (this.props.autherr === 'Error: Email is in use') {
      ERROR = 'Error: Email is in use';
    } else if (this.props.autherr === 'Error: Username is in use') {
      ERROR = 'Error: Username is in use';
    }

    return (
      <div id="signin_up">
        <div>
          <h1 id="signin_up_title">Sign Up</h1>
          <h2>First Name</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeFirstname} placeholder="First Name" />
          <h2>Last Name</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeLastname} placeholder="Last Name" />
          <h2>Email</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeEmail} placeholder="Email" />
          <h2>Password</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangePassword} placeholder="Password" />
          <h2>Confirm Password</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeConfirm} placeholder="Confirm Password" />
        </div>
        <div>
          <div className="sign-button" onClick={this.submitinfo}>Sign Up</div>
        </div>
        {ERROR}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  autherr: reduxState.auth.autherr,
});

export default withRouter(connect(mapStateToProps, { signupUser })(signUp));
