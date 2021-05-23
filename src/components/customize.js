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
        <button type="button">Save</button>
      </div>
    );
  }
}

export default customize;
