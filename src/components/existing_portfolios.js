import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { fetchPortfolios } from '../actions';
import '../style.scss';

// copy pasted from Aadhya's code but does not function yet

function existingPortfolios(props) {
  useEffect(() => {
    props.fetchPortfolios();
  }, []);

  const [searchWord, setSearch] = useState(''); // this is for searching if we want a search bar
  // Learned from Thomas in CS52 TA hours
  const onChangeHandler = (setter) => (e) => setter(e.target.value);

  if (props.all == null) {
    return (<div />);
  } else {
    return (
      <div>
        <input type="text" tabIndex={0} value={searchWord} onChange={onChangeHandler(setSearch)} placeholder="Search portfolio" />
        <div id="post_div"> {
        props.all.filter((template) => {
          if (template.title.includes(searchWord)) {
            return template;
          }
          return null;
        }).map((template) => {
          return (
            <Link to={`posts/${template._id}`} className="post_link" key={template._id}>
              <div className="template" key={template._id} id="template">
                <ReactMarkdown>{template.title}</ReactMarkdown>
              </div>
            </Link>
          );
        })
      }
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    all: reduxState.template.all,
  };
}

export default connect(mapStateToProps, { fetchPortfolios })(existingPortfolios);
