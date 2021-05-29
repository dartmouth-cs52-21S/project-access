import React, { Component } from 'react';
import '../style.scss';

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="profile-page">
        <div className="profile-user-info">
          <div className="profile-img">
            <img src="" alt="none" />
          </div>
          <div className="profile-info">
            <div className="profile-info-name">Arista Williams</div>
            <div className="profile-info-email">arista.williams.22@dartmouth.edu</div>
          </div>
        </div>
        <div className="view-portfolios">
          View All Portfolios
        </div>
        <div className="create-portfolio">
          Create New Portfolio
        </div>
        <div className="print-resume">
          Print Resume
        </div>
        <div className="edit-resume">
          Edit Resume
        </div>
        <div className="settings">
          Settings
        </div>
        <div className="logout">
          Logout
        </div>
      </div>
    );
  }
}

export default profile;
