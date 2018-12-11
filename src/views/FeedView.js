import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import FeedItem from '../components/FeedItem'
import NewPost from '../components/NewPost'
import { createPost, getPosts, createComment } from '../api/posts'
import { createConversation } from '../api/conversations'

class FeedView extends Component {

  state = {
    creatingPost: false,
    posts: [],
    tabValue: 0
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts(params = {}) {
    console.log(params)
    try {
      const res = await getPosts(params)
      this.setState({posts: res.data.posts})
    }
    catch(e) {
      console.log(e)
    }
  }

  async createPost(post) {
    try {
      const res = await createPost(post)
      const p = res.data.post
      const posts = this.state.posts
      posts.unshift(p)
      this.setState({creatingPost: false, posts: posts})
    }
    catch(e) {
      console.log(e)
    }
  }

  async addComment(comment, postId) {
    comment.post_id = postId
    try {
      const res = await createComment(comment)
      const c = res.data.comment
      const posts = this.state.posts
      posts.forEach(post => {
        if(post.id === c.post_id)
          post.comments.push(c)
      })
      this.setState({posts: posts})
    }
    catch(e) {
      console.log(e)
    }
  }

  handleTab(event, value) {
    this.setState({ tabValue: value })
    const params = value ? { sort: 'nearby' } : {}
    this.getPosts(params)
  }

  async sendMessageTo(username) {
    const conversation = { username }
    try {
      const res = await createConversation(conversation)
      const conversationId = res.data.conversation.id
      console.log(conversationId)
      this.props.history.push(`/conversations/${conversationId}`)
    }
    catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Feed
            </Typography>
          </Toolbar>
          <Tabs value={this.state.tabValue} onChange={(e, v) => this.handleTab(e, v)} centered>
            <Tab label="Recent" />
            <Tab label="Nearby" />
          </Tabs>
        </AppBar>
        <div className="Feed">
          {
            this.state.posts.map(post => <FeedItem sendMessageTo={(username) => this.sendMessageTo(username)} key={post.id} post={post} addComment={(comment) => this.addComment(comment, post.id)}/>)
          }
          <Button variant="contained" color="primary" className="AddPost" onClick={() => this.setState({creatingPost: true})}>
            Create Post
          </Button>
          <NewPost 
            open={this.state.creatingPost} 
            close={() => this.setState({creatingPost: false})}
            onSubmit={(post) => this.createPost(post)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(FeedView)
