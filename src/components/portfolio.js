import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPortfolio } from '../actions';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.fetchPortfolio(this.props.match.params.id);
  }

  render() {
    if (Object.keys(this.props.curr).length === 0) {
      return null;
    } else {
      return (
        <div>
          {console.log(this.props.curr)}
          <div className="header">
            <h1>{this.props.curr.resume.event.name}</h1>
          </div>
          <div className="aboutme">
            <h3>About Me</h3>
            <p>backgroundColor: {this.props.curr.aboutMe.backgroundColor}</p>
            <p>color: {this.props.curr.aboutMe.Color}</p>
            <p>flexDirection: {this.props.curr.aboutMe.flexDirection}</p>
            <p>fontSize: {this.props.curr.aboutMe.fontSize}</p>
            <p>justifyContent: {this.props.curr.aboutMe.justifyContent}</p>
            <p>padding: {this.props.curr.aboutMe.padding}</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (reduxState) => ({
  curr: reduxState.portfolio.current,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolio })(Portfolio));
