/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPortfolio } from '../actions';

class ChooseTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

    displaytemplates = () => {
      const templates = this.props.templateOptions.map((template, id) => {
        // style.scss to conform all templates to a same window size
        <div className="choose-template-page-bottom">
          <img src={template.url} alt="none" onClick={this.props.selectedtemplate(id)} />
        </div>;
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
  templateOptions: reduxState.templates.options,
});

export default withRouter(connect(mapStateToProps, { createPortfolio })(ChooseTemplate));
