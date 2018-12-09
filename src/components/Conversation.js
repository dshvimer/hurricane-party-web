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
  render() {
    return (
      <Card className="Conversation-container">
        <CardContent className="Conversation">

          <Typography 
            className="Conversation-bubbleSender"
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nulla sit amet mauris scelerisque.
          </Typography>

          <Typography 
            className="Conversation-bubbleReciever" 
            gutterBottom
            color="textSecondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis nulla eu lacus molestie, in.
          </Typography>
          
          <form>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Enter message"
              multiline
              fullWidth
              margin="normal"
              variant="filled"
            />
          </form>

          <div className="Conversation-meaasgeBoxContainer">
            <Button variant="contained" size="large" color="primary">
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
