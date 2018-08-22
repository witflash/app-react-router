import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { NotFound } from './components/Not-found';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Edit } from './components/Edit';
import { Register } from './components/Register';

export class Auth extends Component {
  constructor(props) {
    super(props);

    this.api = this.props.api;
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    console.log(user);
    this.api.addUser(user).then(response => {
      console.log('response: ', response);
      console.log(this.props.history);
    });
  }

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
        <Route render={() => <Register addUser={this.addUser} />} path="/register" />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Auth;
