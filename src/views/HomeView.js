import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import MapboxMapComponent from '../components/MapboxMapComponent'
import FeedView from './FeedView'

class HomeView extends Component {
  render() {
    return (
      <div className="Home">
        <MapboxMapComponent/>
        <FeedView/>
        { !localStorage.getItem('token') && <Redirect to="/signup"/> }
      </div>
    );
  }
}

export default HomeView
