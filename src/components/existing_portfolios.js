/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
// import React, { useEffect, useState } from 'react';
import '../style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPortfolio, fetchPortfolios, deletePortfolio } from '../actions';
import '../styles/existing-portfolios.scss';

class ExistingPortfolios extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.fetchPortfolios();
    // this.props.fetchPortfolio(this.props.match.params.id);
  }

  onDeleteClick = (id) => {
    console.log(this.props);
    console.log(this.props.match.params.id);
    // console.log('ID HERE', this.props.curr..params.id);
    this.props.deletePortfolio(id, this.props.history);
  }

  displayPortfolios = () => {
    return (
      this.props.portfolios.map((portfolio) => {
        console.log('THE PORTFOLIO', portfolio);
        if (portfolio) {
          return (
            <div className="portfolio-construct">
              <h2>{portfolio.name}</h2>
              <div className="portfolio-container">
                <div id="wrap" className="iframecontainer">
                  <iframe id="scaled-frame" src={`/portfolios/${portfolio.id}`} />
                </div>

                <div className="portfolio-options">
                  {/* pp */}
                  <Link to={`/portfolios/edit/resume/${portfolio._id}`}>
                    Edit Content
                  </Link>
                  <Link to={`/portfolios/edit/style/${portfolio._id}`}>
                    Edit Style
                  </Link>
                  {/* <Link to={`/portfolios/${portfolio._id}`}> */}
                  <a onClick={() => { window.location.href = `/portfolios/${portfolio._id}`; }}>
                    View Portfolio
                  </a>
                  {/* </Link> */}
                  <div>
                    <button type="button" className="portfolio-delete" onClick={() => { this.onDeleteClick(portfolio.id); }}>Delete Portfolio</button>
                  </div>
                </div>
              </div>
            </div>
          // <div className="iframe-container" key={portfolio._id}>
          //   <div className="blur" />
          //   <iframe title={`Portfolio ${portfolio.__v}`} src={`/portfolios/${portfolio.id}`} />
          //   {/* <iframe src={`/portfolios/${portfolio.id}`} title={`Portfolio ${portfolio.__v}`}> */}
          //   <div className="portfolio-options">
          //     {/* pp */}
          //     <Link to={`/portfolios/edit/resume/${portfolio._id}`}>
          //       Edit Resume
          //     </Link>
          //     <Link to={`/portfolios/${portfolio._id}`}>
          //       View Portfolio
          //     </Link>
          //     <div>
          //       <button type="button" className="portfolio-delete" onClick={() => { this.onDeleteClick(portfolio.id); }}>Delete Portfolio</button>
          //     </div>
          //   </div>
          // </div>
          );
        } else {
          return (
            <div>
              You currently have no portfolios!
              <Link to="/templates">
                Edit Resume
              </Link>
            </div>
          );
        }
      })
    );
  }

  render() {
    return (
      <div className="display-portfolios">
        {this.displayPortfolios()}
      </div>
    );
  }
}

// function ExistingPortfolios(props) {
//   useEffect(() => {
//     props.fetchPortfolios();
//   }, []);

//   // const [searchWord, setSearch] = useState(''); // this is for searching if we want a search bar
//   // Learned from Thomas in CS52 TA hours
//   // const onChangeHandler = (setter) => (e) => setter(e.target.value);

//   if (props.all == null) {
//     return (<div />);
//   } else {
//     return (
//       <div>
//         {/* <input type="text" tabIndex={0} value={searchWord} onChange={onChangeHandler(setSearch)} placeholder="Search portfolio name" /> */}
//         <div id="post_div"> {
//         props.all
//         // .filter((portfolio) => {
//           // if (portfolio.title.includes(searchWord)) {
//           //   return portfolio;
//           // }
//           // return null;
//         // })
//           .map((portfolio) => {
//             return (
//               <Link to={`posts/${portfolio._id}`} className="post_link" key={portfolio._id}>
//                 <div className="template" key={portfolio._id} id="template">
//                   <ReactMarkdown>{portfolio.title}</ReactMarkdown>
//                 </div>
//               </Link>
//             );
//           })
//       }
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = (reduxState) => ({
  portfolios: reduxState.portfolio.all,
  curr: reduxState.portfolio.current,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolio, fetchPortfolios, deletePortfolio })(ExistingPortfolios));
