import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components//PassForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div> 
      </Router>  
    </div>
  );
}

export default App;