/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
//   NavLink,
} from 'react-router-dom';
import { getUserProfile, updateUserProfile } from '../actions/index';
import '../styles/profile-page.scss';

// Profile page commponent that displays username, email, and provides routed
// options to create, print, edit resume, as well as settings and logout

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      editingName: false,
    };
  }

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       user: {
  //         email: '',
  //         password: '',
  //       },
  //     };
  //   }

  //   handlePassword = (event) => {
  //     this.setState(((prevState) => ({
  //       user: {
  //         ...prevState.user,
  //         password: event.target.value,
  //       },
  //     })));
  //   }

  // fetching user profile information
  componentDidMount = (props) => {
    this.props.getUserProfile();
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...this.props.profile,
      },
    })));
  }

  handleFirstName = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        firstName: event.target.value,
      },
    })));
  }

  handleLastName = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        lastName: event.target.value,
      },
    })));
  }

  changeName = () => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...this.props.profile,
      },
      editingName: true,
    })));
  }

  save = (props) => {
    if (this.state.user.firstName !== '' && this.state.user.lastName !== '') {
      this.setState(((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
        },
        editingName: false,
      })));
      this.props.updateUserProfile(this.state.user);
      this.props.history.push('/settings');
    }
  }

  displayEditableName = () => {
    if (this.state.editingName) {
      return (
        <div>
          {this.displayMissingName()}
          <input className="profile-info-name" value={this.state.user.firstName} onChange={this.handleFirstName} />
          <input className="profile-info-name" value={this.state.user.lastName} onChange={this.handleLastName} />
          <button className="sign-button" type="button" onClick={this.save}>Save</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="profile-info-name">{this.props.profile.firstName} {this.props.profile.lastName}</div>
          <button className="sign-button" type="button" onClick={this.changeName}>Change Name</button>
        </div>
      );
    }
  }

  displayMissingName = () => {
    if (this.state.user.firstName === '' || this.state.user.lastName === '') {
      return (
        <div>
          First name and last name must be filled!
        </div>
      );
    } else {
      return null;
    }
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
            {this.displayEditableName()}
            <div className="profile-info-email">{this.props.profile.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

// export default Profile;
export default withRouter(connect(mapStateToProps, { getUserProfile, updateUserProfile })(Settings));
