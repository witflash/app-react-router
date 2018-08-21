import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Session } from './services/Session';
import Api from './services/Api';
import { Auth } from './Auth';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginned: false,
      userId: false,
      connected: false,
    };
    this.session = new Session();
    this.api = new Api('http://localhost:3003/users');
    this.setSession();
  }

  setSession() {
    const sessionToken = this.session.getToken();
    if (!sessionToken) {
      return;
    }

    this.api.getData().then(response => {
      const users = response.data;
      if (users) {
        this.setState({ connected: true });
      }
      for (let i = 0; i < users.length; i += 1) {
        const tempToken = this.session.createToken(users[i]);
        if (tempToken === sessionToken) {
          this.setState({ isLoginned: true, userId: users[i].id });
        }
      }
      return;
    });
  }

  componentDidMount() {}

  render() {
    const blockConnect = <div className="text-center">Connecting to server...</div>;
    const blockLoad = this.state.connected ? <Auth session={this.state} /> : blockConnect;

    return (
      <Router>
        <div className="container">
          <h1 className="pt-3 mb-5">Mate Social Network</h1>
          <div className="col-12 col-md-6 col-lg-4">
            {blockLoad}
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
