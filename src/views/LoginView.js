import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import Login from '../components/Login'
import { authenticate } from '../api/users'

class LoginView extends Component {

  state = {
    loading: false,
    authenticated: false,
  }

  async attemptLogin(auth) {
    this.setState({loading: true})
    try {
      const res = await authenticate(auth)
      localStorage.setItem('token', res.data.jwt)
      this.setState({loading: false, authenticated: true})
    }
    catch(e) {
      console.log(e)
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <div className="Signup">
        <Login
          onLogin={(auth) => this.attemptLogin(auth)}
          renderSignupLink={(text) => <Link to="/signup">{text}</Link>}
        />
        { this.state.authenticated && <Redirect to="/"/> }
        {
          this.state.loading && (
            <div className="loading">
              <CircularProgress/>
            </div>
          )
        }
      </div>
    );
  }
}

export default LoginView
