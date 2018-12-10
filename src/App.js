import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignupView from './views/SignupView'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={HomeView} />
          <Route path="/signup/" component={SignupView} />
          <Route path="/login/" component={LoginView} />
        </div>
      </Router>
    );
  }
}

export default App
