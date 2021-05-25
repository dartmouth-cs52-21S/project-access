/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ChooseTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenTemplate: null,
    };
  }

    selectedtemplate = () => {
      this.setState({ chosenTemplate: template.id });
      this.props.saveTemplate(this.state.chosenTemplate);
    }

    displaytemplates = () => {

      const templates = this.props.templateOptions.map((template) => {
        // style.scss to conform all templates to a same window size
        <div id="templateobject" onClick={this.selectedtemplate}>
          <div className="background-">
            <h2>{template.title}</h2>
            {/* will specify the contents of body not to sure what is in it */}
            <div>{template.body}</div>
          </div>
        </div>
        return (
          <ul id="choose-template-templates">
            {templates}
          </ul>
        );
      });
    }

    render() {
      const DISPLAY = this.displaytemplates;
      return (
        // desigining the template page
        <div className = "choose-template-page">
          <div className = "choose-template-page-top"> 
            Choose Your Template
          </div>
          {/* {this.displaytemplates()} */}
          <div className= "choose-template-page-">
        </div>
        { }
      );
    }
}

const mapStateToProps = (reduxState) => ({
  templateOptions: reduxState.templates.options,
});
export default withRouter(connect(mapStateToProps, { saveTemplate })(ChooseTemplate));
