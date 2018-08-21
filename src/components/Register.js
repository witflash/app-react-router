import React, { Component } from 'react';

export class Register extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData();
    const userData = getFormFields(e.target);
    console.log('userData: ', userData);
  }

  getFormFields(form) {
    let formField;
    for (let i = 0; i < userData.length; i += 1) {
      console.log(formField[i]);
    }
  }

  render() {
    return (
      <div>
        <h2 className="mb-4">Register new user</h2>

        <form className="form" name="form-login" onSubmit={this.login}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="login">Enter Login:</label>
            <input type="text" id="login" name="login" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter password:</label>
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
