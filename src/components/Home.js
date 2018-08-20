import React, { Component } from 'react';
import { Register } from './Register';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  isLoginned() {
    return false;
  }

  render() {
    console.log(this.props);
    const home = this.isLoginned() ? <h2>Home</h2> : <Register />;

    return home;
  }
}

export default Home;
