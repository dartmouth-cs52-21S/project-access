import '../style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from './navbar';
import Profile from './profile';
import LandingPage from './landingpage';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Customize from './customize';
import ChooseTemplate from './chooseTemplate';
import existingPortfolios from './existingPortfolios';
import resumeInput from './resumeInput';

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
