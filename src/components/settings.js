/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
// import '../style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
//   NavLink,
} from 'react-router-dom';
import validator from 'validator';
import Dropzone from 'react-dropzone';
import { getUserProfile, updateUserProfile } from '../actions/index';
// import '../styles/profile-page.scss';
import '../styles/settings.scss';

// Profile page commponent that displays username, email, and provides routed
// options to create, print, edit resume, as well as settings and logout

class Settings extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({ files });
    };
    this.state = {
      user: {},
      editingName: false,
      preview: '',
    };
  }

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

  handleEmail = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        email: event.target.value,
      },
    })));
  }

  onImageUpload(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      this.setState({ preview: window.URL.createObjectURL(file), file });
    }
  }

  displayS3 = () => {
    return (
      <div>
        <img id="preview"
          alt="preview"
          src={(this.state.preview === '') ? 'https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg' : this.state.preview}
        />
        <input type="file"
          name="coverImage"
          onChange={this.onImageUpload}
        />
      </div>
    );
  }

  displayInvalidEmail = () => {
    if (this.state.email !== null) {
      if (validator.isEmail(this.state.user.email)) {
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
    if (this.state.user.firstName !== '' && this.state.user.lastName !== '' && this.state.user.email !== '' && validator.isEmail(this.state.user.email)) {
      this.props.updateUserProfile(this.state.user);
      console.log(this.props.autherr);
      if (this.props.autherr !== 'Error: Error: Email is in use') {
        this.setState(((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
          },
          editingName: false,
        })));
      }
      console.log('saving');
      // this.props.history.push('/profile');
    }
  }

  displayEmailExistsError = () => {
    if (this.props.autherr === 'Error: Error: Email is in use') {
      return (
        <div>Update email failed. Email already in use!</div>
      );
    } else {
      return null;
    }
  }

  displayEditableName = () => {
    if (this.state.editingName) {
      return (
        <div className="editing">
          {this.displayMissingName()}
          <div className="editingname">
            <div className="col">
              <input className="textbox" type="text" placeholder="First Name" value={this.state.user.firstName} onChange={this.handleFirstName} />
              <span className="focus-bg" />
            </div>
            <br />
            <div className="col">
              <input className="textbox" type="text" placeholder="Last Name" value={this.state.user.lastName} onChange={this.handleLastName} />
              <span className="focus-bg" />
            </div>
          </div>
          <br />
          {this.displayMissingEmail()}
          {this.displayInvalidEmail()}
          <div className="col">
            <input className="textbox emailbox" type="text" placeholder="Email" value={this.state.user.email} onChange={this.handleEmail} />
            <span className="focus-bg" />
          </div>
          {this.displayEmailExistsError()}
          {/* <input className="profile-info-name-editing" placeholder="First Name" value={this.state.user.firstName} onChange={this.handleFirstName} />
          <input className="profile-info-name-editing" placeholder="Last Name" value={this.state.user.lastName} onChange={this.handleLastName} /> */}
          <button className="save-button" type="button" onClick={this.save}>Save Profile</button>
        </div>
      );
    } else {
      return (
        <div className="profile-name-section">
          <div className="profile-name-email">
            <div className="profile-info-name">
              {this.props.profile.firstName} {this.props.profile.lastName}
              <button className="sign-button" type="button" onClick={this.changeName}><FontAwesomeIcon icon={faUserEdit} /></button>
            </div>
            <div className="profile-info-email">{this.props.profile.email}</div>
          </div>
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

  displayMissingEmail = () => {
    if (this.state.user.email === '') {
      return (
        <div>
          Email must be filled!
        </div>
      );
    } else {
      return null;
    }
  }

  displayDropZone = () => {
    const dropzoneRef = createRef();
    const openDialog = () => {
      // Note that the ref is set async,
      // so it might be null at some point
      if (dropzoneRef.current) {
        dropzoneRef.current.open();
      }
    };
    return (
      // Disable click and keydown behavior on the <Dropzone>
      <Dropzone ref={dropzoneRef} noClick noDrag noKeyboard>
        {({ getRootProps, getInputProps, acceptedFiles }) => {
          return (
            <div className="container">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <img src={(this.state.files.length === 0) ? 'https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg' : this.state.files[0]} alt="none" onClick={openDialog} />
              </div>
              <aside>
                <ul>
                  {acceptedFiles.map((file) => (
                    this.setState({ files: [file] })
                  ))}
                </ul>
              </aside>
            </div>
          );
        }}
      </Dropzone>
    );
  }

  render() {
    return (
      <div className="profile-page">

        <div className="profile-user-info">
          <div className="profile-img">
            {/* extra feature: implementing image upload */}
            {/* {this.displayDropZone()} */}
            {this.displayS3()}
          </div>
        </div>
        <div className="profile-info">
          {this.displayEditableName()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  autherr: state.auth.authError,
});

// export default Profile;
export default withRouter(connect(mapStateToProps, { getUserProfile, updateUserProfile })(Settings));
