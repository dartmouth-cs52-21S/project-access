import '../style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile/:userID" component={Profile} />
          <Route exact path="/profile/:userID/porfolios" component={Porfolios} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => (<div>post not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
