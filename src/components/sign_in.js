/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { signinUser } from '../actions';
import '../style.scss';

class signIn extends Component {
  constructor(props) {
    super(props);

    this.user = {
      email: null,
      password: null,
    };
  }

  componentDidMount() {
    this.user = {
      email: null,
      password: null,
    };
  }

  OnInputChangeEmail = (event) => {
    this.user = { ...this.user, email: event.target.value };
  }

  OnInputChangePassword = (event) => {
    this.user = { ...this.user, password: event.target.value };
  }

  submitinfo = () => {
    // this.props.signinUser(this.user, this.props.history);
    console.log(this.user);
  }

  render() {
    let ERROR = null;

    if (this.props.autherr === 'Unauthorized') {
      ERROR = 'Your email or password is incorrect';
    } else if (this.props.autherr === 'Bad Request') {
      ERROR = 'Please input your email and password';
    }

    return (
      <div id="signin_up">
        <div>
          <h1 id="signin_up_title">Sign In</h1>
          <h2>Email</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangeEmail} placeholder="Email" />
          <h2>Password</h2>
          <TextareaAutosize id="utextinput" onChange={this.OnInputChangePassword} placeholder="Password" />
        </div>
        <div>
          <div className="sign-button" onClick={this.submitinfo}>Sign In</div>
        </div>
        {ERROR}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  autherr: reduxState.auth.autherr,
});

export default withRouter(connect(mapStateToProps, { signinUser })(signIn));
