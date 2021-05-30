// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import React, { Component } from 'react';
// import '../style.scss';
// // import { connect } from 'react-redux';
// import {
//   // withRouter,
//   NavLink,
// } from 'react-router-dom';
// import { getUserProfile } from '../actions/index';

// // Profile page commponent that displays username, email, and provides routed
// // options to create, print, edit resume, as well as settings and logout

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // user: '',
//     };
//   }

//   componentDidMount = (props) => {
//     this.props.getUserProfile();
//   }
//   // this.usernameretreive = () => {
//   //   getUser
//   // }

//   render() {
//     return (
//       <div className="profile-page">
//         <div className="profile-user-info">
//           <div className="profile-img">
//             <img src="" alt="none" />
//           </div>
//           <div className="profile-info">
//             <div className="profile-info-name">Arista WIlliams</div>
//             <div className="profile-info-email">arista.williams.22@dartmouth.edu</div>
//           </div>
//         </div>
//         <div className="view-portfolios">
//           <NavLink exact to="/portfolios">
//             <button className="button" type="button">View All Portfolios</button>
//           </NavLink>
//         </div>
//         <div className="create-portfolio">
//           <NavLink exact to="/resume">
//             <button className="button" type="button">Create New Portolio</button>
//           </NavLink>
//         </div>
//         <div className="print-resume">
//           {/* Link to print resume to be done */}
//           <NavLink exact to="/">
//             <button className="button" type="button">Print Resume</button>
//           </NavLink>
//         </div>
//         <div className="edit-resume">
//           <NavLink exact to="/resume">
//             <button className="button" type="button">Edit Resume</button>
//           </NavLink>
//         </div>
//         <div className="settings">
//           <NavLink exact to="/templates">
//             <button className="button" type="button">Settings</button>
//           </NavLink>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   profile: state.user.profile,
// });

// // export default Profile;
// export default withRouter(connect(mapStateToProps, { getUserProfile })(Profile));
