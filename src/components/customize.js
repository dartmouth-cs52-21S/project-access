import React, { Component } from 'react';
import '../style.scss';

class customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>Edit your portfolio
        <div className="customize_content">
          <div className="education">
            <h3>Education</h3>
          </div>
        </div>
        <div className="customize_appear">
          <div className="body_color">
            <h3>Body color</h3>
          </div>
        </div>
        <button type="button">Save</button>
      </div>
    );
  }
}

export default customize;
