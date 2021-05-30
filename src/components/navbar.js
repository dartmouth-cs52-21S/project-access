/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/navbar_style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
  NavLink,
} from 'react-router-dom';

import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  displayNav = (props) => {
    console.log(this.props.auth);
    const { auth } = this.props; // temporary placeholder. to be removed once the authentication action has been created
    // auth = true;
    if (auth) {
      return (
        <nav>
          <ul className="navbar">
            <NavLink className="resumov" exact to="/"><h1>Resumov</h1></NavLink>
            {/* userID to get from signing in and storing the userID in redux? */}
            {/* <NavLink to="/profile/:userID">Profile</NavLink> */}
            <div className="lefttabs">
              <NavLink to="/profile"><h1>Profile</h1></NavLink>
              {/* <NavLink to="/signout"><h1>Sign Out</h1></NavLink> */}
              {/* <NavLink exact to="/resume"><h1>Resume</h1></NavLink> */}
              <div onClick={() => { this.props.signoutUser(this.props.history); }}><h1>Signout</h1></div>
            </div>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul className="navbar">
            <NavLink className="resumov" exact to="/"><h1>Resumov</h1></NavLink>
            <div className="lefttabs">
              <NavLink className="signinup" exact to="/signin"><h1>Sign In</h1></NavLink>
              <NavLink className="signinup" exact to="/signup"><h1>Sign Up</h1></NavLink>
            </div>
          </ul>
        </nav>
      );
    }
  };

  render() {
    return (
      <div>
        {this.displayNav()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
