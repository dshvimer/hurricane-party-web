import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import SignupView from './views/SignupView'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import ConversationsView from './views/ConversationsView'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={HomeView} />
          <Route path="/signup/" component={SignupView} />
          <Route path="/login/" component={LoginView} />
          <Route path="/conversations/" component={ConversationsView} />
        </div>
      </Router>
    );
  }
}

export default App
