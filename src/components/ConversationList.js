import React from 'react'
import "./ConversationList.css"
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

let Time = new Date().toLocaleTimeString();

class ConversationList extends React.Component {
  render() {
    return (
        <Card>
        <CardContent>

        <List dense>
          {this.props.conversations.map(conversation => (
            <ListItem key={conversation.id} button onClick={() => this.props.goToConversation(conversation)}>
              <Avatar>C</Avatar>
              <ListItemText primary={conversation.participants} />
              <ListItemSecondaryAction>
                {Time}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        </CardContent>
      </Card>
    )
  }
}

export default ConversationList
