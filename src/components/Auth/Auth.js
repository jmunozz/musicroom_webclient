import React, { Component } from 'react';
import MusicRoomHttpClient from '../../api/musicroom';

import './Auth.css';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  authenticate(event) {
    const that = this;
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const apiClient = new MusicRoomHttpClient();
    let endpoint = '/api/token';
    const body = { email, password };
    return apiClient.post(endpoint, body)
      .then(({ token }) => {
        endpoint = '/api/me';
        apiClient.setNewToken(token);
        return apiClient.get(endpoint);
      })
      .then((user) => {
        that.props.setUser(user);
      })
      .catch((error) => {
        that.setState({ error });
      });
  }

  render() {
    return (
      <div className="auth-container">
        <form onSubmit={this.authenticate.bind(this)}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
        {(this.state.error) && <div className="auth-error" >{this.state.error.message}</div>}
      </div>
    );
  }
}

export default Auth;
