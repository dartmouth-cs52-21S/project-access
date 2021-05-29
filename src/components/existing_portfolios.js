// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { fetchPortfolios } from '../actions';
import '../style.scss';

// copy pasted from Aadhya's code but does not function yet

function ExistingPortfolios(props) {
  useEffect(() => {
    props.fetchPortfolios();
  }, []);

  // const [searchWord, setSearch] = useState(''); // this is for searching if we want a search bar
  // Learned from Thomas in CS52 TA hours
  // const onChangeHandler = (setter) => (e) => setter(e.target.value);

  if (props.all == null) {
    return (<div />);
  } else {
    return (
      <div>
        {/* <input type="text" tabIndex={0} value={searchWord} onChange={onChangeHandler(setSearch)} placeholder="Search portfolio name" /> */}
        <div id="post_div"> {
        props.all
        // .filter((portfolio) => {
          // if (portfolio.title.includes(searchWord)) {
          //   return portfolio;
          // }
          // return null;
        // })
          .map((portfolio) => {
            return (
              <Link to={`posts/${portfolio._id}`} className="post_link" key={portfolio._id}>
                <div className="template" key={portfolio._id} id="template">
                  <ReactMarkdown>{portfolio.title}</ReactMarkdown>
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
    all: reduxState.portfolio.all,
  };
}

export default connect(mapStateToProps, { fetchPortfolios })(ExistingPortfolios);
