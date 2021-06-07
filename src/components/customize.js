/* eslint-disable react/jsx-boolean-value */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../styles/customize-page.scss';
import { connect } from 'react-redux';
import validateColor from 'validate-color';
import FontPicker from 'font-picker-react';
import { SketchPicker } from 'react-color';
import { fetchPortfolio, updatePortfolio } from '../actions';

function customize(props) {
  const portfolio = props.curr;

  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setSlide] = useState(1);

  const [name, setName] = useState('');

  const [userNameColor, setUserNameColor] = useState('');
  const [userNameBgColor, setUserNameBgColor] = useState('');
  const [userNameFont, setUserNameFont] = useState('');
  const [userNameFontSize, setUserNameFontSize] = useState('');
  const [userNameDir, setUserNameDir] = useState('');

  const [roleColor, setRoleColor] = useState('');
  const [roleBgColor, setRoleBgColor] = useState('');
  const [roleFont, setRoleFont] = useState('');
  const [roleFontSize, setRoleFontSize] = useState('');
  const [roleDir, setRoleDir] = useState('');

  const [aboutmeColor, setAboutmeColor] = useState('');
  const [aboutmeBgColor, setAboutmeBgColor] = useState('');
  const [aboutmeFont, setAboutmeFont] = useState('');
  const [aboutmeFontSize, setAboutmeFontSize] = useState('');
  const [aboutmeDir, setAboutmeDir] = useState('');

  const [projectsColor, setProjectsColor] = useState('');
  const [projectsBgColor, setProjectsBgColor] = useState('');
  const [projectsFont, setProjectsFont] = useState('');
  const [projectsFontSize, setProjectsFontSize] = useState('');
  const [projectsDir, setProjectsDir] = useState('');

  const [contactmeColor, setContactmeColor] = useState('');
  const [contactmeBgColor, setContactmeBgColor] = useState('');
  const [contactmeFont, setContactmeFont] = useState('');
  const [contactmeFontSize, setContactmeFontSize] = useState('');
  const [contactmeDir, setContactmeDir] = useState('');

  const onChangeHandler = (setter) => (e) => setter(e.target.value);
  const onChangeHandlerColor = (setter) => (e) => (validateColor(e.target.value) ? setter(e.target.value) : setter('white'));
  const onChangeHandlerFont = (setter, font) => setter(font);
  const onChangeHandlerColorPicker = (setter, color) => setter(color);

  const forwardSlide = () => {
    if (currentSlide < 4) {
      setSlide(currentSlide + 1);
    } else {
      setSlide(1);
    }
  };

  const backSlide = () => {
    if (currentSlide > 1) {
      setSlide(currentSlide - 1);
    } else {
      setSlide(4);
    }
  };

  const renderSlide = () => {
    console.log(currentSlide);
    if (currentSlide == 1) {
      return (
        <div className="custom_section">
          <h3>Name Section</h3>
          <p>Background color: {portfolio.header?.userName.backgroundColor} </p>
          <p>Color: {portfolio.header?.userName.color} </p>
          <p>flexDirection: {portfolio.header?.userName.flexDirection} </p>
          <p>font: {portfolio.header?.userName.font} </p>
          <p>fontSize: {portfolio.header?.userName.fontSize} </p>
          <p>justifyContent: {portfolio.header?.userName.justifyContent} </p>
          <p>padding: {portfolio.header?.userName.padding} </p>
        </div>
      );
    }
    if (currentSlide == 2) {
      return (
        <div className="custom_section">
          <h3>Job Title</h3>
          <p>Background color: {portfolio.header?.role.backgroundColor} </p>
          <p>Color: {portfolio.header?.role.color} </p>
          <p>flexDirection: {portfolio.header?.role.flexDirection} </p>
          <p>font: {portfolio.header?.role.font} </p>
          <p>fontSize: {portfolio.header?.role.fontSize} </p>
          <p>justifyContent: {portfolio.header?.role.justifyContent} </p>
          <p>padding: {portfolio.header?.role.padding} </p>
        </div>
      );
    }
    if (currentSlide == 3) {
      return (
        <div className="custom_section">
          <h3>About me</h3>
          <p>Background color: {portfolio.aboutMe?.backgroundColor} </p>
          <p>Color: {portfolio.aboutMe?.color} </p>
          <p>flexDirection: {portfolio.aboutMe?.flexDirection} </p>
          <p>font: {portfolio.aboutMe?.font} </p>
          <p>fontSize: {portfolio.aboutMe?.fontSize} </p>
          <p>justifyContent: {portfolio.aboutMe?.justifyContent} </p>
          <p>padding: {portfolio.aboutMe?.padding} </p>
        </div>
      );
    }
    if (currentSlide == 4) {
      return (
        <div className="custom_section">
          <h3>Projects</h3>
          <p>Background color: {portfolio.projects?.backgroundColor} </p>
          <p>Color: {portfolio.projects?.color} </p>
          <p>flexDirection: {portfolio.projects?.flexDirection}</p>
          <p>font: {portfolio.projects?.font} </p>
          <p>fontSize: {portfolio.projects?.fontSize} </p>
          <p>justifyContent: {portfolio.projects?.justifyContent} </p>
          <p>padding: {portfolio.projects?.padding} </p>
        </div>
      );
    }
    if (currentSlide == 5) {
      return (
        <div className="custom_section">
          <h3>Contact me</h3>
          <p>Background color: {portfolio.contactMe?.backgroundColor} </p>
          <p>Color: {portfolio.contactMe?.color} </p>
          <p>flexDirection: {portfolio.contactMe?.flexDirection} </p>
          <p>font: {portfolio.contactMe?.font} </p>
          <p>fontSize: {portfolio.contactMe?.fontSize} </p>
          <p>justifyContent: {portfolio.contactMe?.justifyContent} </p>
          <p>padding: {portfolio.contactMe?.padding} </p>
        </div>
      );
    }
    return (<div />);
  };

  const renderEditingSlides = () => {
    if (currentSlide == 1) {
      return (
        <div className="custom_section">
          <h2>Header</h2>
          <h3>Name section</h3>
          <p>Background color:
            <input onChange={onChangeHandler(setUserNameBgColor)} value={userNameBgColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setUserNameBgColor, color.hex)}
            color={userNameBgColor}
          />
          <p>Font color:
            <input onChange={onChangeHandler(setUserNameColor)} value={userNameColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setUserNameColor, color.hex)}
            color={userNameColor}
          />
          <p>Font Size:
            <input onChange={onChangeHandler(setUserNameFontSize)} value={userNameFontSize} />
          </p>
          <p>Font:</p>
          <div>
            <FontPicker
              apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
              activeFontFamily={userNameFont}
              onChange={(nextFont) => onChangeHandlerFont(setUserNameFont, nextFont.family)}
            />
            <p className="apply-font" component style={{ fontSize: userNameFontSize, color: userNameColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setUserNameDir)} value={userNameDir} />
          </p>
        </div>
      );
    }
    if (currentSlide == 2) {
      return (
        <div className="custom_section">
          <h3>Job title</h3>
          <p>Background color:
            <input onChange={onChangeHandler(setRoleBgColor)} value={roleBgColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setRoleBgColor, color.hex)}
            color={roleBgColor}
          />
          <p>Font color:
            <input onChange={onChangeHandler(setRoleColor)} value={roleColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setRoleColor, color.hex)}
            color={roleColor}
          />
          <p>Font Size:
            <input onChange={onChangeHandler(setRoleFontSize)} value={roleFontSize} />
          </p>
          <p>Font:</p>
          <div>
            <FontPicker
              apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
              activeFontFamily={roleFont}
              onChange={(nextFont) => onChangeHandlerFont(setRoleFont, nextFont.family)}
            />
            <p className="apply-font" component style={{ fontSize: roleFontSize, color: roleColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setRoleDir)} value={roleDir} />
          </p>
        </div>
      );
    }
    if (currentSlide == 3) {
      return (
        <div className="custom_section">
          <h2>About Me</h2>
          <p>Background color:
            <input onChange={onChangeHandler(setAboutmeBgColor)} value={aboutmeBgColor} onBlur={onChangeHandlerColor(setUserNameColor)} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setAboutmeBgColor, color.hex)}
            color={aboutmeBgColor}
          />
          <p>Font color:
            <input onChange={onChangeHandler(setAboutmeColor)} value={aboutmeColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setAboutmeColor, color.hex)}
            color={aboutmeColor}
          />
          <p>Font Size:
            <input onChange={onChangeHandler(setAboutmeFontSize)} value={aboutmeFontSize} />
          </p>
          <p>Font:</p>
          <div>
            <FontPicker
              apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
              activeFontFamily={aboutmeFont}
              onChange={(nextFont) => onChangeHandlerFont(setAboutmeFont, nextFont.family)}
            />
            <p className="apply-font" component style={{ fontSize: aboutmeFontSize, color: aboutmeColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setAboutmeDir)} value={aboutmeDir} />
          </p>
        </div>
      );
    }
    if (currentSlide == 4) {
      return (
        <div className="custom_section">
          <h2>Projects</h2>
          <p>Background color:
            <input onChange={onChangeHandler(setProjectsBgColor)} value={projectsBgColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setProjectsBgColor, color.hex)}
            color={projectsBgColor}
          />
          <p>Font color:
            <input onChange={onChangeHandler(setProjectsColor)} value={projectsColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setProjectsColor, color.hex)}
            color={projectsColor}
          />
          <p>Font Size:
            <input onChange={onChangeHandler(setProjectsFontSize)} value={projectsFontSize} />
          </p>
          <p>Font:</p>
          <div>
            <FontPicker
              apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
              activeFontFamily={projectsFont}
              onChange={(nextFont) => onChangeHandlerFont(setProjectsFont, nextFont.family)}
            />
            <p className="apply-font" component style={{ fontSize: projectsFontSize, color: projectsColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setProjectsDir)} value={projectsDir} />
          </p>
        </div>
      );
    }
    if (currentSlide == 5) {
      return (
        <div className="custom_section">
          <h2>Contact Me</h2>
          <p>Background color:
            <input onChange={onChangeHandler(setContactmeBgColor)} value={contactmeBgColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setContactmeBgColor, color.hex)}
            color={contactmeBgColor}
          />
          <p>Font color:
            <input onChange={onChangeHandler(setContactmeColor)} value={contactmeColor} />
          </p>
          <SketchPicker
            onChange={(color) => onChangeHandlerColorPicker(setContactmeColor, color.hex)}
            color={contactmeColor}
          />
          <p>Font Size:
            <input onChange={onChangeHandler(setContactmeFontSize)} value={contactmeFontSize} />
          </p>
          <p>Font:</p>
          <div>
            <FontPicker
              apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
              activeFontFamily={contactmeFont}
              onChange={(nextFont) => onChangeHandlerFont(setContactmeFont, nextFont.family)}
            />
            <p className="apply-font" component style={{ fontSize: contactmeFontSize, color: contactmeColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setContactmeDir)} value={contactmeDir} />
          </p>
        </div>
      );
    }
    return (<div />);
  };

  useEffect(() => {
    if (props.match.params.id) {
      props.fetchPortfolio(props.match.params.id);
    }
  }, [props.match.params.id]);

  useEffect(() => {
    if (Object.keys(portfolio).length > 0) {
      setName(portfolio.name);
      setUserNameColor(portfolio.header.userName.color);
      setUserNameBgColor(portfolio.header.userName.backgroundColor);
      setUserNameFont(portfolio.header.userName.font);
      setUserNameFontSize(portfolio.header.userName.fontSize);
      setUserNameDir(portfolio.header.userName.flexDirection);

      setRoleColor(portfolio.header.role.color);
      setRoleBgColor(portfolio.header.role.backgroundColor);
      setRoleFont(portfolio.header.role.font);
      setRoleFontSize(portfolio.header.role.fontSize);
      setRoleDir(portfolio.header.role.flexDirection);

      setAboutmeColor(portfolio.aboutMe.color);
      setAboutmeBgColor(portfolio.aboutMe.backgroundColor);
      setAboutmeFont(portfolio.aboutMe.font);
      setAboutmeFontSize(portfolio.aboutMe.fontSize);
      setAboutmeDir(portfolio.aboutMe.flexDirection);

      setProjectsColor(portfolio.projects.color);
      setProjectsBgColor(portfolio.projects.backgroundColor);
      setProjectsFont(portfolio.projects.font);
      setProjectsFontSize(portfolio.projects.fontSize);
      setProjectsDir(portfolio.projects.flexDirection);

      setContactmeColor(portfolio.contactMe.color);
      setContactmeBgColor(portfolio.contactMe.backgroundColor);
      setContactmeFont(portfolio.contactMe.font);
      setContactmeFontSize(portfolio.contactMe.fontSize);
      setContactmeDir(portfolio.contactMe.flexDirection);
    }
  }, [portfolio]);

  function onDoneEdit() {
    setIsEditing(!isEditing);
    props.updatePortfolio(props.match.params.id, {
      name,
      header: {
        ...portfolio.header,
        userName: {
          ...portfolio.header.userName,
          color: userNameColor,
          backgroundColor: userNameBgColor,
          font: userNameFont,
          fontSize: userNameFontSize,
          flexDirection: userNameDir,
        },
        role: {
          ...portfolio.header.role,
          color: roleColor,
          backgroundColor: roleBgColor,
          font: roleFont,
          fontSize: roleFontSize,
          flexDirection: roleDir,
        },
      },
      aboutMe: {
        ...portfolio.aboutMe,
        color: aboutmeColor,
        backgroundColor: aboutmeBgColor,
        font: aboutmeFont,
        fontSize: aboutmeFontSize,
        flexDirection: aboutmeDir,
      },
      projects: {
        ...portfolio.projects,
        color: projectsColor,
        backgroundColor: projectsBgColor,
        font: projectsFont,
        fontSize: projectsFontSize,
        flexDirection: projectsDir,
      },
      contactMe: {
        ...portfolio.contactMe,
        color: contactmeColor,
        backgroundColor: contactmeBgColor,
        font: contactmeFont,
        fontSize: contactmeFontSize,
        flexDirection: contactmeDir,
      },
    });
  }

  if (Object.keys(portfolio).length === 0) {
    return null;
  } else if (props.error === '') {
    if (!isEditing || !props.authenticated) {
      return (
        <div>
          <div className="input_div">
            <h1>Customize {portfolio.name}</h1>
            <button type="button" onClick={forwardSlide}> forward! </button>
            <button type="button" onClick={backSlide}> back! </button>
            {renderSlide()}

            <div className="buttons_div">
              <button id="icon" type="button" onClick={() => setIsEditing(!isEditing)}>edit</button>
              <form action="/portfolios">
                <button type="submit">Render</button>
              </form>
            </div>
          </div>
        </div>
      );
    } else { // In editing mode
      return (
        <div className="input_div">
          <div className="post">
            <h1>Edit Portfolio</h1>
            <h2>Portfolio Name: </h2>
            <input onChange={onChangeHandler(setName)} value={name} />
            <button type="button" onClick={forwardSlide}> forward! </button>
            <button type="button" onClick={backSlide}> back! </button>
            {renderEditingSlides()}

            <div className="buttons_div">
              <button id="icon" type="button" onClick={onDoneEdit}>Done</button>
              <Link to="/">
                <button id="icon" type="button">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="input_div">
        <h2>Check if you are on the right post.</h2>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    curr: reduxState.portfolio.current,
    error: reduxState.errors.error,
    authenticated: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPortfolio, updatePortfolio })(customize));
