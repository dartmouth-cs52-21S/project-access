import '../style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Profile from './profile';
import LandingPage from './landing_page';
import SignIn from './sign_in';
import SignUp from './sign_up';
import PrivateRoute from './private_route';
import ChooseTemplate from './choose_template';
import ExistingPortfolios from './existing_portfolios';
import InputResume from './input_resume';
import Portfolio from './portfolio';
import customize from './customize';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/resume" component={InputResume} />
          <PrivateRoute exact path="/templates" component={ChooseTemplate} />
          {/* <PrivateRoute exact path="/portfolios/:id" component={Portfolio} /> */}
          {/* Anyone can view Portfolio. Does not need PrivateRoute */}
          <PrivateRoute exact path="/portfolios/edit/:id" component={customize} />
          <Route exact path="/portfolios/:id" component={Portfolio} />
          <PrivateRoute exact path="/portfolios" component={ExistingPortfolios} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => (<div>post not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
