import React, { Component } from 'react';

export class Register extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-4">Register new user</h2>

        <form className="form" name="form-login">
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>

          <div className="form-group">
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" className="form-control" />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>

          <div className="form-group">
            <label for="login">Enter Login:</label>
            <input type="text" id="login" name="login" className="form-control" />
          </div>

          <div className="form-group">
            <label for="password">Enter password:</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-6">
              <button className="btn btn-primary btn-block" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
