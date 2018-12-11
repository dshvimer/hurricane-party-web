import api from './base'

export function createPost(post) {
  return api.post('/posts', { post })
}

export function getPosts(params) {
  return api.get('/posts', { params })
}

export function createComment(comment) {
  return api.post('/comments', { comment })
}
