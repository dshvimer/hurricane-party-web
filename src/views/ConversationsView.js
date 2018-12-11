import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider'

import Dialog from '@material-ui/core/Dialog'

import ConversationList from '../components/ConversationList'
import Conversation from '../components/Conversation'
import { getConversations, createMessage } from '../api/conversations'

class ConversationsView extends Component {

  state = {
    conversations: [],
    conversation: null,
    open: false,
  }

  componentDidMount() {
    this.getConversations()
  }

  async getConversations() {
    try {
      const res = await getConversations()
      this.setState({ conversations: res.data.conversations })
    }
    catch(e) {
      console.log(e)
    }
  }

  goToConversation(conversation) {
    this.props.history.push(`/conversations/${conversation.id}`)
  }

  closeConversation() {
    this.props.history.push(`/conversations`)
  }

  sendMessage(body, conversationId) {
    const message = {
      body,
      conversation_id: conversationId
    }
    createMessage(message)
  }

  onReceived({ conversation }) {
    const conversations = this.state.conversations
    const updated = []
    conversations.forEach(c => {
      if(c.id == conversation.id)
        updated.push(conversation)
      else
        updated.push(c)
    })
    this.setState({conversations: updated})
  }

  render() {
    return (
      <ActionCableProvider url={process.env.REACT_APP_WS_URL + '?token=' + localStorage.getItem('token')}>
        <div className="Conversations">
          <ActionCable ref='roomChannel' channel={{channel: 'NotificationsChannel'}} onReceived={(message) => this.onReceived(message)} />
          <ConversationList goToConversation={(conversation) => this.goToConversation(conversation)} conversations={this.state.conversations}/>
          <Route
            exact
            path={`${this.props.match.url}/:id`}
            render={(props) => {
              const conversationId = props.match.params.id
              const conversation = this.state.conversations.filter(c => c.id == conversationId)[0]
              return (
                <Dialog onClose={() => this.closeConversation()} open>
                  <Conversation onSubmit={(body) => this.sendMessage(body, conversationId)} conversation={conversation}/>
                </Dialog>
              )
            }}
          />
        </div>
      </ActionCableProvider>
    );
  }
}

export default withRouter(ConversationsView)
