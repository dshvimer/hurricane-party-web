import React, { Component } from 'react';

import FeedItem from '../components/FeedItem'

class FeedView extends Component {
  render() {
    return (
      <div className="Feed">
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
      </div>
    );
  }
}

export default FeedView
