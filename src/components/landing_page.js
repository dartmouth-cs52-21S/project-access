/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import '../styles/landing_page.scss';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getStarted = (props) => {
    if (this.props.auth) {
      return (
        <NavLink exact to="/profile">
          <button className="button" type="button"><span>Lets get Started  </span></button>
        </NavLink>
      );
    } else {
      return (
        <NavLink exact to="/signup">
          <button className="button" type="button"><span>Lets get Started  </span></button>
        </NavLink>
      );
    }
  }

  startNow = (props) => {
    if (this.props.auth) {
      return (
        <NavLink exact to="/profile">
          <button className="button" type="button"><span>Start Now  </span></button>
        </NavLink>
      );
    } else {
      return (
        <NavLink exact to="/signup">
          <button className="button" type="button"><span>Start Now  </span></button>
        </NavLink>
      );
    }
  }

  render() {
    return (
      <div className="landing-page">
        <div className="header-container">
          <p>Build your personal portfolio with</p>
          <p>a click of a button!</p>
          {this.getStarted()}
        </div>
        <div className="center-container">
          {/* converted image into a link using postimg.cc */}
          <div className="image"><img src="https://i.postimg.cc/25cvxWcg/you-got-this.png" alt="" /></div>
          <div>
            <p>You’re destined for big things, let's get you there!</p>
            <p>Make a beautiful site to showcase all your amazing experiences.</p>
          </div>
        </div>
        <div className="bottom-container">
          <p>Boost your applications <br /> and get your dream job now!</p>
          <div className="image"><img src="https://i.postimg.cc/L4Zfznz0/chat.png" alt="" /></div>
        </div>
        {this.startNow()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { })(LandingPage));
