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
    return (
      <div>Renders the portfolio view page</div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  curr: reduxState.portfolio.current,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolio })(Portfolio));
