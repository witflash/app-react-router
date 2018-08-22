import React, { Component } from 'react';

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      country: '',
      email: '',
      login: '',
      password: '',
    };

    this.login = this.login.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    console.log('this.state: ', this.state);
    this.props.addUser(this.state);
  }

  // getFormFields(form) {
  //   let formField;
  //   for (let i = 0; i < userData.length; i += 1) {
  //     console.log(formField[i]);
  //   }
  // }

  render() {
    return (
      <div>
        <h2 className="mb-4">Register new user</h2>

        <form className="form" name="form-login" onSubmit={this.login}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              className="form-control"
              value={this.state.country}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login">Enter Login:</label>
            <input
              type="text"
              id="login"
              name="login"
              className="form-control"
              value={this.state.login}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Enter password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onInputChange}
              required
            />
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
