import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { signinUser, signoutUser } from '../actions';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('Make sure to fill all fields');

  // Learned from Thomas in CS52 TA hours
  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  function onSubmitClick() {
    if (email !== '' && password !== '') {
      props.signinUser({ email, password }, props.history);
    } else if (email === '') {
      setError('Missing Email!');
    } else if (password === '') {
      setError('Missing Password!');
    } else {
      setError('Missing Information, check again');
    }
  }

  function onSignOutClick() {
    props.signoutUser(props.history);
  }

  if (props.authenticated) {
    return (
      <div className="input_div">
        <h2>Sign Out</h2>
        <p>It looks like you are already signed in.</p>
        <p>Would you like to sign out now?</p>
        <div className="input_btn_div">
          <button type="button" onClick={onSignOutClick} id="submit_btn">Sign Out</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="input_div">
        <h2>Sign In </h2>
        <p id="error_msg">{error}</p>
        <p>Email</p>
        {/* Adated from https://github.com/Andarist/react-textarea-autosize */}
        <TextareaAutosize id="input_email" placeholder="User Email" onChange={onChangeHandler(setEmail)} value={email} />
        <p>Username</p>
        <TextareaAutosize id="input_password" placeholder="user Password" onChange={onChangeHandler(setPassword)} value={password} />
        <div className="input_btn_div">
          <button type="button" onClick={onSubmitClick} id="submit_btn">Sign In</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (reduxState) => {
  return {
    error: reduxState.errors.error,
    authenticated: reduxState.auth.authenticated,
  };
};

export default withRouter(connect(mapStateToProps, { signinUser, signoutUser })(SignIn));
