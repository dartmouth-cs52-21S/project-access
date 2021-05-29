import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePortfolio } from '../actions';

class customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // onEditClick = () => {
  //   this.props.updatePost(fields, portfolioId);
  // }

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
        <button type="button" onClick={this.onEditClick}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  templateOptions: reduxState.templates.options,
});

export default withRouter(connect(mapStateToProps, { updatePortfolio })(customize));
