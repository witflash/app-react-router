import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-3">Login</h2>

        <form className="form mb-4" name="form-login">
          <div className="form-group">
            <label htmlFor="login">Enter Login:</label>
            <input type="text" id="login" name="login" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter password:</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
        </form>

        <Link to="/register">Not registered?</Link>
      </div>
    );
  }
}

export default Login;
