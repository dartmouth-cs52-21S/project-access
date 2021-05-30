/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import '../styles/landing_page.scss';
import {
  NavLink,
} from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="landing-page">
        <div className="header-container">
          <p>Build your personal portfolio with</p>
          <p>a click of a button!</p>
          <NavLink exact to="/signup">
            <button className="button" type="button"><span>Lets get Started  </span></button>
          </NavLink>
        </div>
        <div className="center-container">
          <div className="image"><img src="src/img/landing_page/you_got_this.png" alt="" /></div>
          <div>
            <p>You’re destined for big things, let's get you there!</p>
            <p>Make a beautiful site to showcase all your amazing experiences.</p>
          </div>
        </div>
        <div className="bottom-container">
          <p>Boost your applications <br /> and get your dream job now!</p>
          <div className="image"><img src="src/img/landing_page/chat.png" alt="" /></div>
        </div>
        <NavLink exact to="/signup">
          <button className="button" type="button"><span>Start Now  </span></button>
        </NavLink>
      </div>
    );
  }
}

export default LandingPage;
