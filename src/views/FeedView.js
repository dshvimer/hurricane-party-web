import React, { Component } from 'react';

import Button from '@material-ui/core/Button'

import FeedItem from '../components/FeedItem'
import NewPost from '../components/NewPost'
import { createPost, getPosts, createComment } from '../api/posts'

class FeedView extends Component {

  state = {
    creatingPost: false,
    posts: [],
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts() {
    const params = { sort: 'nearby' }
    try {
      const res = await getPosts()
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

  render() {
    return (
      <div className="Feed">
        {
          this.state.posts.map(post => <FeedItem key={post.id} post={post} addComment={(comment) => this.addComment(comment, post.id)}/>)
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
    );
  }
}

export default FeedView
