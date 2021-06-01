/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import { createPortfolio, fetchTemplates } from '../actions';

// createPortfolio(templateId, {
//   firstName, lastName, email, password, portfolioIds, resume, portfolioName,
// }, history);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { selectedtemplate } from '../actions';
class ChooseTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      portfolioName: '',
      templateSelected: '',
      showModal: false,
    };
  }

  componentDidMount = (props) => {
    this.props.fetchTemplates();
  }

  clickTemplate = (id) => {
    console.log('current template id selected', id);
    this.setState({ isCreating: true });
    this.setState({ templateSelected: id });
    this.handleOpenModal();
  }

  onPortfolioNameChange = (event) => {
    this.setState({ portfolioName: event.target.value });
  }

  onCreateTemplate = () => {
    // console.log('template id', this.state.templateSelected);
    if (this.state.portfolioName !== '') {
      this.props.createPortfolio(this.state.templateSelected, this.state.portfolioName, this.props.history);
    }
  }

  displayInvalidPortfolioName = () => {
    if (this.state.portfolioName === '') {
      return (
        <div className="black-font">Please ensure that portfolio name has been chosen before proceeding</div>
      );
    } else {
      return null;
    }
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
              <img src={template} alt="none" onClick={() => { this.clickTemplate(id); }} />
            </div>
          );
        })
      );
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
    // desigining the template page
      <div className="choose-template-page">
        {this.displayAll()}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Select Portfolio Name"
          ariaHideApp={false}
        >
          <h2 className="black-font">You chose template {this.state.templateSelected}</h2>
          <h2 className="black-font">Portfolio Name</h2>
          <input onChange={this.onPortfolioNameChange} value={this.state.portfolioName} placeholder="Insert portfolio name" />
          {this.displayInvalidPortfolioName()}
          <button type="button" onClick={this.handleCloseModal}>Back</button>
          <button type="button" onClick={this.onCreateTemplate}>Create Portfolio</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.template.all,
});

export default withRouter(connect(mapStateToProps, { createPortfolio, fetchTemplates })(ChooseTemplate));
