/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPortfolio, fetchTemplates } from '../actions';

// createPortfolio(templateId, {
//   firstName, lastName, email, password, portfolioIds, resume, portfolioName,
// }, history);

class ChooseTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreating: false,
      portfolioName: '',
      templateSelected: '',
    };
  }

  componentDidMount = (props) => {
    this.props.fetchTemplates();
  }

  clickTemplate = (id) => {
    console.log('current template id selected', id);
    this.setState({ isCreating: true });
    this.setState({ templateSelected: id });
  }

  onPortfolioNameChange = (event) => {
    this.setState({ portfolioName: event.target.value });
  }

  onCreateTemplate = () => {
    console.log('template id', this.state.templateSelected);
    this.props.createPortfolio(this.state.templateSelected, this.state.portfolioName, this.props.history);
  }

  displayCreatingTemplates = () => {
    return (
      this.props.templates.map((template, id) => {
        return (
          <div>
            <img src={template} alt="none" onClick={() => { this.clickTemplate(id); }} />
          </div>
        );
      })
    );
  }

  displayAll = (props) => {
    // console.log('templates', this.props.templates);
    if (this.props.templates.length === 0) {
      // console.log('empty!');
      return (<div>No Templates</div>);
    } else if (this.state.isCreating) {
      return (
        <div>
          {this.displayCreatingTemplates()}
          <div>
            <input onChange={this.onPortfolioNameChange} value={this.state.portfolioName} placeholder="insert portfolio name" />
            <button type="button" onClick={this.onCreateTemplate}>Create Portfolio</button>
          </div>
        </div>
      );
    } else {
      return (
        this.props.templates.map((template, id) => {
          return (
            <div>
              <img src={template} alt="none" onClick={() => { this.clickTemplate(); }} />
            </div>
          );
        })
      );
    }
  }

  render() {
    return (
    // desigining the template page
      <div className="choose-template-page">
        {this.displayAll()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.template.all,
});

export default withRouter(connect(mapStateToProps, { createPortfolio, fetchTemplates })(ChooseTemplate));
