import React, { Component } from 'react';
import '../landing_page.scss';
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
          <p>Build your personal portfolio with a click of a button!</p>
          <NavLink exact to="/signup">
            <button type="button">Lets get Started</button>
          </NavLink>
        </div>
        <div className="center-container">
          <img src="src/img/landing_page/you_got_this.png" alt="" />
          <div>
            <p>You’re destined for big things, we are here to get you there!</p>
            <p>Make a beautiful site to showcase all your amazing experiences</p>
          </div>
        </div>
        <div className="bottom-container">
          <p>Boost your applications and get your dream job now!</p>
          <img src="src/img/landing_page/chat.png" alt="" />
        </div>
        <NavLink exact to="/signup">
          <button type="button">Start Now</button>
        </NavLink>
      </div>
    );
  }
}

export default LandingPage;
