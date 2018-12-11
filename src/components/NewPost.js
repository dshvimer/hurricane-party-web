import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import DialogActions from '@material-ui/core/DialogActions'


class NewPost extends React.Component {

  state = {
    body: ''
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.close}>
        <DialogTitle id="simple-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label="Whats the update?"
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => this.setState({body: e.target.value})}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => this.props.onSubmit(this.state)}>
              Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
export default NewPost
