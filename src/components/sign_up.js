/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import validator from 'validator';
import { signupUser } from '../actions';
import '../style.scss';

class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmpassword: null,
      resume: null,
    };
  }

  componentDidMount() {
  }

  OnInputChangeEmail = (event) => {
    this.setState(((prevState) => ({ email: event.target.value })));
  }

  OnInputChangePassword = (event) => {
    this.setState(((prevState) => ({ password: event.target.value })));
  }

  OnInputChangeConfirm = (event) => {
    this.setState(((prevState) => ({ confirmpassword: event.target.value })));
  }

  OnInputChangeFirstname = (event) => {
    this.setState(((prevState) => ({ firstName: event.target.value })));
  }

  OnInputChangeLastname = (event) => {
    this.setState(((prevState) => ({ lastName: event.target.value })));
  }

  submitinfo = () => {
    if (this.state.confirmpassword !== this.state.password || this.state.email == null || this.state.firstName == null || this.state.lastName == null || this.state.password == null || !validator.isEmail(this.state.email.toString())) {
      console.log('unable to signup user. missing, invalid, fields or mismatch password');
    } else {
      // console.log('submitting info');
      this.props.signupUser(this.state, this.props.history);
      // console.log(this.state);
    }
  }

  displayPasswordMismatch = () => {
    if (this.state.confirmpassword === this.state.password) {
      return (
        null
      );
    } else {
      return (
        <div>Passwords must match!</div>
      );
    }
  }

  displayMissingFirstName = () => {
    if (this.state.firstName === null || this.state.firstName === '') {
      return (
        <div>First name is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingLastName = () => {
    if (this.state.lastName === null || this.state.lastName === '') {
      return (
        <div>Last name is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingEmail = () => {
    if (this.state.email === null || this.state.email === '') {
      return (
        <div>Email is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingPassword = () => {
    if (this.state.password === null || this.state.password === '') {
      return (
        <div>Password is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingConfirm = () => {
    if (this.state.confirmpassword === null || this.state.confirmpassword === '') {
      return (
        <div>Confirm password is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayEmailUsed = (props) => {
    if (this.props.autherr === 'Error: Email is in use') {
      return (
        <div>Email is already in used!</div>
      );
    } else {
      return null;
    }
  }

  displayInvalidEmail = () => {
    if (this.state.email !== null) {
      if (validator.isEmail(this.state.email)) {
        // console.log('email valid');
        return (
          <div>Email Valid</div>
        );
      } else {
        // console.log('email invalid');
        return (
          <div>Email Invalid</div>
        );
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="signin_up">
        <div>
          <h1 id="signin_up_title">Sign Up</h1>
          <h2>First Name</h2>
          {this.displayMissingFirstName()}
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeFirstname} placeholder="First Name" />
          <h2>Last Name</h2>
          {this.displayMissingLastName()}
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeLastname} placeholder="Last Name" />
          <h2>Email</h2>
          {this.displayMissingEmail()}
          {this.displayInvalidEmail()}
          {this.displayEmailUsed()}
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeEmail} placeholder="Email" />
          <h2>Password</h2>
          {this.displayMissingPassword()}
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangePassword} placeholder="Password" />
          {this.displayPasswordMismatch()}
          <h2>Confirm Password</h2>
          {this.displayMissingConfirm()}
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeConfirm} placeholder="Confirm Password" />
        </div>
        <div>
          <div className="sign-button" onClick={this.submitinfo}>Sign Up</div>
        </div>
        {/* {ERROR} */}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  autherr: reduxState.auth.authError,
});

export default withRouter(connect(mapStateToProps, { signupUser })(signUp));
