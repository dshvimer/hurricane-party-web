import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

import Signup from '../components/Signup'
import { createUser, authenticate } from '../api/users'

class SignupView extends Component {

  state = {
    authenticated: false,
    loading: false,
  }

  attemptSignup(user) {
    this.setState({loading: true})
    navigator.geolocation.getCurrentPosition(async position => {
      try {
        const { latitude, longitude } = position.coords
        user.latitude = latitude
        user.longitude = longitude
        const res = await createUser(user)
        if (res.status === 201) {
          const auth = await authenticate(user)
          const token = auth.data.jwt
          localStorage.setItem('token', token)
          localStorage.setItem('username', user.username)
          this.setState({authenticated: true, loading: false})
        }
      }
      catch(e) {
        console.log(e)
        this.setState({loading: false})
      }
    })
  }

  render() {
    return (
      <div className="Signup">
        <Signup
          renderLoginLink={(text) => <Link to="/login">{text}</Link>}
          onSignup={(user) => this.attemptSignup(user)}
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

export default SignupView
