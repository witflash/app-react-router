import React, { Component } from 'react';
import { Register } from './Register';
import { Login } from './Login';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  isLoginned() {
    return false;
  }

  render() {
    // const home = this.isLoginned() ? <h2>Home</h2> : <Login />;

    return <Home />;
  }
}

export default Home;
