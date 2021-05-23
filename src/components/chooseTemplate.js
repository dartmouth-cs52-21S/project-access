import React, { Component } from 'react';
import '../style.scss';

class chooseTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>Choose a template
        <button type="button">Template 1</button>
      </div>
    );
  }
}

export default chooseTemplate;
