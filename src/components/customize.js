/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom';
import '../style.scss';
import { connect } from 'react-redux';
import { fetchPortfolio, updatePortfolio, deletePortfolio } from '../actions';

function customize(props) {
  const portfolio = props.curr;
  console.log(portfolio);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('');
  const [aboutmeColor, setAboutmeColor] = useState('');
  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  useEffect(() => {
    if (props.match.params.id) {
      props.fetchPortfolio(props.match.params.id);
    }
  }, [props.match.params.id]);

  useEffect(() => {
    if (portfolio) {
      if (portfolio[0]) {
        console.log(portfolio[0].aboutMe.color);
        console.log('yes');
        setName(portfolio[0].name);
        setAboutmeColor(portfolio[0].aboutMe.color);
      }
    }
  }, [portfolio]);
  // const fields = {
  //   name, phone, email, linkedin, college, degree, gpa, relevantCoursework,
  // };
  // {
  //   "name": "a",
  //   "header": { "a" : "a" },
  //   "aboutMe": { "a" : "a" },
  //   "projects": { "a" : "a" },
  //   "contactMe": { "a" : "a" },
  //   "resume": {"a" : "a", "b": "b"}
  // }

  const fields = {
    name, aboutmeColor,
  };

  function onDoneEdit() {
    console.log(portfolio[0].aboutMe.color);
    setIsEditing(!isEditing);
    props.updatePortfolio(props.match.params.id, fields);
    console.log(portfolio[0].aboutMe.color);
  }

  function onDeleteClick() {
    if (props.authenticated) {
      history.push('/posts');
      props.deletePortfolio(props.match.params.id, history);
    }
  }

  if (portfolio[0] == null) {
    return (
      <div />
    );
  } else if (props.error === '') {
    if (!isEditing || !props.authenticated) {
      return (
        <div>
          <div className="input_div">
            <h2>Customize</h2>
            <div className="note-title">
              <h3>Name: {portfolio[0].name}</h3>
              <h3>About me</h3>
              <p>Background color: {portfolio[0].aboutMe.backgroundColor} </p>
              <p>Color: {portfolio[0].aboutMe.color} </p>
              <p>flexDirection: {portfolio[0].aboutMe.flexDirection} </p>
              <p>fontSize: {portfolio[0].aboutMe.fontSize} </p>
              <p>justifyContent: {portfolio[0].aboutMe.justifyContent} </p>
              <p>padding: {portfolio[0].aboutMe.padding} </p>
            </div>
            <div className="buttons_div">
              <button id="icon" type="button" onClick={() => setIsEditing(!isEditing)}>edit</button>
              <button id="icon" type="button" onClick={onDeleteClick}>delete</button>
            </div>
          </div>
        </div>
      );
    } else { // In editing mode
      return (
        <div className="input_div">
          <div className="post">
            <h2>Edit Portfolio</h2>
            <div className="note-edit">
              <h3>About me</h3>
              <p>Name: </p>
              <input onChange={onChangeHandler(setName)} value={name} />
              <p>About Me color</p>
              <input onChange={onChangeHandler(setAboutmeColor)} value={aboutmeColor} />
            </div>
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

export default withRouter(connect(mapStateToProps, { fetchPortfolio, updatePortfolio, deletePortfolio })(customize));
