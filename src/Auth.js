import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { NotFound } from './components/Not-found';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Edit } from './components/Edit';
import { Register } from './components/Register';

export class Auth extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/edit" component={Edit} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Auth;
