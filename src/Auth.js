import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { NotFound } from './components/Not-found';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Edit } from './components/Edit';
import { Register } from './components/Register';

export class Auth extends Component {
  render() {
    return (
      <Switch>
        <Route
          render={() => (this.props.session.isLoginned ? <Home /> : <Redirect to="/login" />)}
          exact
          path="/"
        />
        <Route path="/login" component={Login} />
        <Route path="/edit" component={Edit} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Auth;
