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
      paddingBottom: this.props.curr.header?.role.paddingBottom,
      paddingLeft: this.props.curr.header?.role.paddingLeft,
      paddingRight: this.props.curr.header?.role.paddingRight,
      weight: this.props.curr.header?.role.weight,
      textAlign: this.props.curr.header?.role.textAlign,
    };

    const headerusernamestyle = {
      backgroundColor: this.props.curr.header?.userName.backgroundColor,
      color: this.props.curr.header?.userName.color,
      display: this.props.curr.header?.userName.display,
      flexDirection: this.props.curr.header?.userName.flexDirection,
      font: this.props.curr.header?.userName.font,
      fontSize: this.props.curr.header?.userName.fontSize,
      justifyContent: this.props.curr.header?.userName.justifyContent,
      paddingTop: this.props.curr.header?.userName.paddingTop,
      paddingLeft: this.props.curr.header?.userName.paddingLeft,
      paddingRight: this.props.curr.header?.userName.paddingRight,
      weight: this.props.curr.header?.userName.weight,
      textAlign: this.props.curr.header?.userName.textAlign,
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
      // display: 'flex',
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

    const spacing = {
      paddingTop: '10px',
      paddingBottom: '10px',
    };

    const bodycolor = {
      backgroundColor: this.props.curr.header?.userName.backgroundColor,
    };

    if (Object.keys(this.props.curr).length === 0) {
      return null;
    } else {
      let projs = [];
      for (let i = 0; this.props.curr.resume?.event?.[`projects${i}`] !== undefined; i += 1) {
        projs = [...projs, this.props.curr.resume?.event?.[`projects${i}`]];
      }

      let res = [];
      for (let i = 0; this.props.curr.resume?.event?.[`research${i}`] !== undefined; i += 1) {
        res = [...res, this.props.curr.resume?.event?.[`research${i}`]];
      }

      let work = [];
      for (let i = 0; this.props.curr.resume?.event?.[`work${i}`] !== undefined; i += 1) {
        work = [...work, this.props.curr.resume?.event?.[`work${i}`]];
      }

      let technical = [];
      for (let i = 0; this.props.curr.resume?.event?.[`technical${i}`] !== undefined; i += 1) {
        technical = [...technical, this.props.curr.resume?.event?.[`technical${i}`]];
      }

      let language = [];
      for (let i = 0; this.props.curr.resume?.event?.[`language${i}`] !== undefined; i += 1) {
        language = [...language, this.props.curr.resume?.event?.[`language${i}`]];
      }

      let LINKEDIN = '';
      if (this.props.curr.resume?.event?.linkedIn !== '') {
        LINKEDIN = <p>LinkedIn: {this.props.curr.resume?.event?.linkedIn}</p>;
      }

      let GPA = '';
      if (this.props.curr.resume?.event?.gpa !== '') {
        GPA = <p>GPA: {this.props.curr.resume.event.gpa}</p>;
      }

      return (
        <div style={bodycolor}>
          {console.log(this.props.curr)}
          <div className="header">
            <h1 style={headerusernamestyle}>{this.props.curr.resume?.event?.name}</h1>
            <h2 style={headerrolestyle}>{this.props.curr.resume?.event?.role}</h2>
          </div>
          <div className="aboutme" style={aboutmestyle}>
            <h2>About Me</h2>
            <p>{this.props.curr.resume?.event?.about}</p>
          </div>
          <div className="education" style={projectstyle}>
            <h2>Education</h2>
            <p>{this.props.curr.resume.event.college}</p>
            <p>{this.props.curr.resume.event.degree}</p>
            {GPA}
          </div>
          <div className="research" style={aboutmestyle}>
            <h2>Research</h2>
            {res.map((research, index) => {
              return (
                <li key={index} style={spacing}>
                  <h3>{research.researchlab}</h3>
                  <p>{new Date(research.startdate).toDateString()} - {new Date(research.enddate).toDateString()}</p>
                  <p>{research.position}</p>
                  <p>{research.description}</p>
                </li>
              );
            })}
          </div>
          <div className="projects" style={projectstyle}>
            <h2>Projects</h2>
            {projs.map((project, index) => {
              return (
                <li key={index} style={spacing}>
                  <h3>{project.project}</h3>
                  <p>{new Date(project.startdate).toDateString()} - {new Date(project.enddate).toDateString()}</p>
                  <p>{project.description}</p>
                </li>
              );
            })}
          </div>
          <div className="work" style={aboutmestyle}>
            <h2>Work Experience</h2>
            {work.map((w, index) => {
              return (
                <li key={index} style={spacing}>
                  <h3>{w.company}</h3>
                  <p>{new Date(w.startdate).toDateString()} - {new Date(w.enddate).toDateString()}</p>
                  <p>{w.position}</p>
                  <p>{w.description}</p>
                </li>
              );
            })}
          </div>
          <div className="technical skills" style={projectstyle}>
            <h2>Technical Skills</h2>
            {technical.map((t, index) => {
              return (
                <li key={index}>
                  <p>{t.technical}</p>
                </li>
              );
            })}
          </div>
          <div className="languages" style={aboutmestyle}>
            <h2>Languages</h2>
            {language.map((l, index) => {
              return (
                <li key={index}>
                  <p>{l.language}</p>
                </li>
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
