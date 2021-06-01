// import React, { useEffect, useState } from 'react';
import '../style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPortfolios } from '../actions';

class ExistingPortfolios extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.fetchPortfolios();
  }

  displayPortfolios = () => {
    return (
      this.props.portfolios.map((portfolio) => {
        console.log(portfolio);
        return (
          <div key={portfolio._id}>
            {/* pp */}
            <Link to={`portfolio/edit/${portfolio._id}`}>
              {portfolio.name}
            </Link>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
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

const mapStateToProps = (state) => ({
  portfolios: state.portfolio.all,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolios })(ExistingPortfolios));
