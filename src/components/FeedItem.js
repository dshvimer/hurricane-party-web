import React from "react";
import "./FeedItem.css";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddComment from "@material-ui/icons/AddCommentRounded";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

class FeedItem extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="User">Aldo</Avatar>}
          // action={
          // <IconButton>
          // <MoreVertIcon />
          // </IconButton>
          // }
          title="In search of water"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography component="p">
            In need of water. anyone know which stores still have any in stock?
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
          <ListItem>
            <Avatar aria-label="User">Vee</Avatar>
            <ListItemText primary="no water by lake worth" />
            {/* <ListItemText primary="Comments" /> */}
          </ListItem>
          <Divider inset />
          <ListItem>
            <Avatar aria-label="User">Greg</Avatar>
            <ListItemText primary="Bocs has Water but over priced" />
            {/* <ListItemText primary="Comments" /> */}
          </ListItem>
          <Divider inset />
          <ListItem className="comment-input">
            <TextField
              label="Enter Comment"
              // placeholder="Comment"
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
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
