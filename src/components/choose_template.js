/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectedtemplate } from '../actions';

class ChooseTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  displaytemplates = () => {
    const chooseTemplateImages = {
      0: 'https://files.slack.com/files-pri/TQ19QMD6Z-F022T0APB8W/screen_shot_2021-05-25_at_12.05.32_pm.png',
    };
    const templates = chooseTemplateImages.map((id, url) => {
      // style.scss to conform all templates to a same window size
      <li>
        <div className="choose-template-page-bottom">
          <img src={url} alt="none" onClick={this.props.selectedtemplate(id)} />
        </div>;
      </li>;
      return (
        <ul id="choose-template-templates">
          {templates}
        </ul>
      );
    });
  }

  render() {
    // const DISPLAY = this.displaytemplates;
    return (
      // desigining the template page
      <div className="choose-template-page">
        {this.displaytemplates()}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  templateOptions: reduxState.portfolio.options,
});

export default withRouter(connect(mapStateToProps, { selectedtemplate })(ChooseTemplate));
