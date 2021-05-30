import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom';
import '../style.scss';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { fetchPortfolio, updatePortfolio, deletePortfolio } from '../actions';

function customize(props) {
  const portfolio = props.curr;
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [linkedin, setLinkedin] = useState('');
  // const [college, setCollege] = useState('');
  // const [degree, setDegree] = useState('');
  // const [gpa, setGpa] = useState('');
  // const [relevantCoursework, setRelevantCoursework] = useState('');
  const [aboutmeColor, setAboutmeColor] = useState('');
  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  useEffect(() => {
    props.fetchPortfolio(props.match.params.id);
    setName(portfolio.name);
    setAboutmeColor(portfolio.aboutmeColor);
    // setPhone(portfolio.phone);
    // setEmail(portfolio.email);
    // setLinkedin(portfolio.linkedin);
    // setCollege(portfolio.college);
    // setDegree(portfolio.degree);
    // setGpa(portfolio.gpa);
    // setRelevantCoursework(portfolio.relevantCoursework);
  }, [portfolio.name, portfolio.aboutmeColor]);
  // [portfolio.name, portfolio.phone, portfolio.email, portfolio.linkedin, portfolio.college, portfolio.degree, portfolio.gpa, portfolio.relevantCoursework]);
  // const fields = {
  //   name, phone, email, linkedin, college, degree, gpa, relevantCoursework,
  // };

  const fields = {
    name, aboutmeColor,
  };

  function onDoneEdit() {
    setIsEditing(!isEditing);
    props.updatePortfolio(fields, portfolio._id);
  }

  function onDeleteClick() {
    if (props.authenticated) {
      history.push('/posts');
      props.deletePortfolio(portfolio._id, history);
    }
  }

  if (props.error === '') {
    if (!isEditing || !props.authenticated) {
      return (
        <div>
          <div className="input_div">
            <h2>Customize</h2>
            <div className="note-title">
              <ReactMarkdown>{portfolio.name}</ReactMarkdown>
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
              {/* <p>Name</p>
              <input onChange={onChangeHandler(setName)} value={name} /> */}
              <p>About me</p>
              <input onChange={onChangeHandler(setAboutmeColor)} value={setAboutmeColor} />
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

//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditing: false,
//     };
//   }

//   componentDidMount = (props) => {
//     fetchPortfolio(this.props.match.params.id);
//   }

//   handleEdit = (e, data) => {
//     this.setState({ isEditing: true });
//     this.props.updatePost(this.props.curr.id, fields);
//   }

//   if (!isEditing) {
//     return (
//       <div>Edit your portfolio
//         <div className="customize_content">
//           <div className="education">
//             <h3>Education</h3>
//             {/* <p>{this.props.curr}</p> */}
//           </div>
//         </div>
//         <div className="customize_appear">
//           <div className="body_color">
//             <h3>Body color</h3>
//           </div>
//         </div>
//         <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button>
//         {/* <button type="button" onClick={this.onSaveClick}>Save</button>
//         <button type="button" onClick={this.onCancelClick}>Cancel</button> */}
//       </div>
//     );
//   } else { // In editing mode
//     return (
//       <div className="input_div">
//         <div className="post">
//           <h2>Edit Entry</h2>
//           <div className="note-edit">
//             <p>Title</p>
//             <input onChange={onChangeHandler(setTitle)} value={title} />
//             <p>Content</p>
//             <input onChange={onChangeHandler(setContent)} value={content} />
//             <p>Tags</p>
//             <input onChange={onChangeHandler(setTags)} value={tags} />
//             <p>Cover URL</p>
//             <input onChange={onChangeHandler(setCoverUrl)} value={coverUrl} />
//             <p>Rating</p>
//             <input onChange={onChangeHandler(setRating)} value={rating} />
//           </div>
//           <div className="buttons_div">
//             <Button id="icon" type="button" onClick={onDoneEdit}>Done</Button>
//             <Link to="/">
//               <Button id="icon" type="button">Cancel</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

// function mapStateToProps = (reduxState) => ({
//   curr: reduxState.portfolio.current,
// });

// export default withRouter(connect(mapStateToProps, { fetchPortfolio, updatePortfolio })(customize));
