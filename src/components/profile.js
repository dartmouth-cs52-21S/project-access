/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
  NavLink,
} from 'react-router-dom';
import { getUserProfile } from '../actions/index';
import '../styles/profile-page.scss';

// Profile page commponent that displays username, email, and provides routed
// options to create, print, edit resume, as well as settings and logout

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: '',
    };
  }

  // fetching user profile information
  componentDidMount = (props) => {
    this.props.getUserProfile();
  }

  render() {
    return (
      <div className="profile-page">
        <div className="profile-user-info">
          <div className="profile-img">
            {/* extra feature: implementing image upload */}
            <img src="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg" alt="none" />
          </div>
          <div className="profile-info">
            {console.log(this.props.profile)}
            <div className="profile-info-name">{this.props.profile.firstName} {this.props.profile.lastName}</div>
            <div className="profile-info-email">{this.props.profile.email}</div>
          </div>
        </div>
        <div className="view-portfolios">
          <NavLink exact to="/portfolios">
            <button className="button" type="button"><span>View Existing Portfolios</span></button>
          </NavLink>
        </div>
        <div className="create-portfolio">
          <NavLink exact to="/templates">
            <button className="button" type="button"><span>Create New Portolio</span></button>
          </NavLink>
        </div>
        <div className="print-resume">
          {/* Link to print resume to be done */}
          <NavLink exact to="/">
            <button className="button" type="button"><span>Print Resume</span></button>
          </NavLink>
        </div>
        <div className="edit-resume">
          <NavLink exact to="/resume">
            <button className="button" type="button"><span>Edit Resume</span></button>
          </NavLink>
        </div>
        <div className="settings">
          <NavLink exact to="/templates">
            <button className="button" type="button"><span>Settings</span></button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

// export default Profile;
export default withRouter(connect(mapStateToProps, { getUserProfile })(Profile));
