import React from 'react'
import "./Conversation.css"
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon'
import SendIcon from '@material-ui/icons/Send'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


class Conversation extends React.Component {

  state = {
    body: ''
  }

  render() {
    return (
      <Card className="Conversation-container">
        <CardContent className="Conversation">

          {
            this.props.conversation && this.props.conversation.messages.map(message => {
              return (
                <Typography 
                  key={message.id}
                  className={localStorage.getItem('username') === message.username ? "Conversation-bubbleSender" : "Conversation-bubbleReciever"}
                  gutterBottom
                >
                  {message.body}
                </Typography>
              )
            })
          }
          
          <form>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Enter message"
              multiline
              fullWidth
              margin="normal"
              variant="filled"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />
          </form>

          <div className="Conversation-meaasgeBoxContainer">
            <Button variant="contained" size="large" color="primary" onClick={() => this.props.onSubmit(this.state.body) && this.setState({ body: ''})}>
              Send
              <Icon>
                <SendIcon/>
              </Icon>
            </Button>
          </div>
         
        </CardContent>
      </Card>
      
    )
  }
}

export default Conversation
