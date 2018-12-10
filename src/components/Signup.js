import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./Signup.css";

class Signup extends Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <div className="App">
        <Card className="cardcss">
          <header className="header" />
          <Grid container justify="center" alignItems="center">
          <CardContent>
            <TextField 
              label="Username" 
              type="email" 
              name="Username" 
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </CardContent>
          
          <CardContent>
            <TextField
              label="Password"
              id="standard-password-input"
              type="password"
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </CardContent>
          </Grid>
          <br />
          <br />
          <Grid container justify="center" alignItems="center">
            <Button
              onClick={() => this.props.onSignup(this.state)}
              style={{
                fontSize: "13px",
                opacity: 0.8
              }}
              variant="contained"
            >
              Sign-up
            </Button>
          </Grid>
        </Card>
        <Card className="cardcss2">
          <br />
          <Grid container justify="center" alignItems="center">
            <Typography variant="body2" gutterBottom>
              Already have an account? { this.props.renderLoginLink('Login here!')}
            </Typography>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Signup;
