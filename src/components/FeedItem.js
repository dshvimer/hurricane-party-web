import React from "react";
import "./FeedItem.css";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

class FeedItem extends React.Component {

  state = {
    body: ''
  }

  render() {
    const date = new Date(this.props.post.created_at)
    return (
      <Card className="FeedItem">
        <CardHeader
          title={this.props.post.user.username}
          subheader={date.toDateString()}
        />
        <CardContent>
          <Typography component="p">
            {this.props.post.body}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites"> */}
          {/* <FavoriteIcon /> */}
          {/* </IconButton> */}
          {
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        </CardActions>
        <List component="nav">
          {
            this.props.post.comments.map(comment => {
              return (
                <ListItem key={comment.id}>
                  <Avatar>P</Avatar>
                  <ListItemText primary={comment.body} />
                <Divider inset />
                </ListItem>
              )
            })
          }
          <ListItem className="comment-input">
            <TextField
              onChange={(e) => this.setState({body: e.target.value})}
              label="Enter Comment"
              value={this.state.body}
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              onClick={() => this.props.addComment(this.state) && this.setState({body: ''})}
              variant="fab"
              color="primary"
              aria-label="Add"
              className="add-comment"
            >
              <AddIcon />
            </Button>
          </ListItem>
        </List>
      </Card>
    );
  }
}
export default FeedItem;
