import api from './base'

export function createMessage(message) {
  return api.post('/messages', { message })
}

export function createConversation(conversation) {
  return api.post('/conversations', { conversation })
}

export function getConversations() {
  return api.get('/conversations')
}
