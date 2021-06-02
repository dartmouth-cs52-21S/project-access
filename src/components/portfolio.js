/* eslint-disable react/no-array-index-key */
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
    const headerrolestyle = {
      backgroundColor: this.props.curr.header?.role.backgroundColor,
      color: this.props.curr.header?.role.color,
      display: this.props.curr.header?.role.display,
      flexDirection: this.props.curr.header?.role.flexDirection,
      font: this.props.curr.header?.role.font,
      fontSize: this.props.curr.header?.role.fontSize,
      justifyContent: this.props.curr.header?.role.justifyContent,
      padding: this.props.curr.header?.role.padding,
      weight: this.props.curr.header?.role.weight,
    };

    const headerusernamestyle = {
      backgroundColor: this.props.curr.header?.userName.backgroundColor,
      color: this.props.curr.header?.userName.color,
      display: this.props.curr.header?.userName.display,
      flexDirection: this.props.curr.header?.userName.flexDirection,
      font: this.props.curr.header?.userName.font,
      fontSize: this.props.curr.header?.userName.fontSize,
      justifyContent: this.props.curr.header?.userName.justifyContent,
      padding: this.props.curr.header?.userName.padding,
      weight: this.props.curr.header?.userName.weight,
    };

    const aboutmestyle = {
      backgroundColor: this.props.curr.aboutMe?.backgroundColor,
      color: this.props.curr.aboutMe?.color,
      display: this.props.curr.aboutMe?.display,
      flexDirection: this.props.curr.aboutMe?.flexDirection,
      font: this.props.curr.aboutMe?.font,
      fontSize: this.props.curr.aboutMe?.fontSize,
      justifyContent: this.props.curr.aboutMe?.justifyContent,
      padding: this.props.curr.aboutMe?.padding,
    };

    const projectstyle = {
      backgroundColor: this.props.curr.projects?.backgroundColor,
      color: this.props.curr.projects?.color,
      display: this.props.curr.projects?.display,
      flexDirection: this.props.curr.projects?.flexDirection,
      font: this.props.curr.projects?.font,
      fontSize: this.props.curr.projects?.fontSize,
      justifyContent: this.props.curr.projects?.justifyContent,
      padding: this.props.curr.projects?.padding,
    };

    const contactstyle = {
      backgroundColor: this.props.curr.contactMe?.backgroundColor,
      color: this.props.curr.contactMe?.color,
      display: this.props.curr.contactMe?.display,
      flexDirection: this.props.curr.contactMe?.flexDirection,
      font: this.props.curr.contactMe?.font,
      fontSize: this.props.curr.contactMe?.fontSize,
      justifyContent: this.props.curr.contactMe?.justifyContent,
      padding: this.props.curr.contactMe?.padding,
    };

    if (Object.keys(this.props.curr).length === 0) {
      return null;
    } else {
      let projs = [];
      for (let i = 0; this.props.curr.resume?.event?.[`projects${i}`] !== undefined; i += 1) {
        projs = [...projs, this.props.curr.resume?.event?.[`projects${i}`]];
      }

      let LINKEDIN = '';
      if (this.props.curr.resume?.event?.linkedIn !== '') {
        LINKEDIN = <p>LinkedIn: {this.props.curr.resume?.event?.linkedIn}</p>;
      }

      return (
        <div>
          {console.log(this.props.curr)}
          <div className="header">
            <h1 style={headerusernamestyle}>{this.props.curr.resume?.event?.name}</h1>
            <h2 style={headerrolestyle}>{this.props.curr.resume?.event?.role}</h2>
          </div>
          <div className="aboutme" style={aboutmestyle}>
            <h2>About Me</h2>
            <p>{this.props.curr.resume?.event?.about}</p>
          </div>
          <div className="projects" style={projectstyle}>
            <h2>Projects</h2>
            {projs.map((project, index) => {
              return (
                <ul key={index}>
                  <h3>{project.project}</h3>
                  <p>{new Date(project.startdate).toDateString()} - {new Date(project.enddate).toDateString()}</p>
                  <p>{project.description}</p>
                </ul>
              );
            })}
          </div>
          <div className="contactme" style={contactstyle}>
            <h2>Contact Me</h2>
            <p>Phone: {this.props.curr.resume?.event?.phone}</p>
            <p>Email: {this.props.curr.resume?.event?.email}</p>
            {LINKEDIN}
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
