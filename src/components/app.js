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
import Customize from './customize';
import ChooseTemplate from './choose_template';
import existingPortfolios from './existing_portfolios';
import resumeInput from './resume_input';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile/:userID" component={Profile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signup" component={Customize} />
          <Route path="/signup" component={ChooseTemplate} />
          <Route path="/signup" component={existingPortfolios} />
          <Route path="/signup" component={resumeInput} />
          <Route render={() => (<div>post not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
