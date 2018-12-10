import api from './base'

export function createUser(user) {
  return api.post('/users', { user })
}

export function authenticate(auth) {
  return api.post('/user_token', { auth })
}
