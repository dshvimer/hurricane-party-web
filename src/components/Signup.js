import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./Signup.css";

import Locations from './Locations.js'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Signup extends Component {
  render() {
    return (
      <div className="App">
        <Card className="cardcss">
          <header className="header" />
          <Grid container justify="center" alignItems="center">
          <CardContent>
            <TextField label="Username" inputType="Username" name="Username" />
          </CardContent>
          
          <CardContent>
            <TextField
              label="Password"
              id="standard-password-input"
              inputType="password"
              name="password"
            />
          </CardContent>
          <CardContent>
            <TextField
              label="Password"
              id="standard-password-input"
              inputType="password"
              name="password"
            />
            
          </CardContent>
          </Grid>
          
          <Grid>
          <CardContent>
            <Locations/>
            
          </CardContent>

          </Grid>
          <br />
          <br />
          <Grid container justify="center" alignItems="center">
            <Button
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
              Already have an account? Login here!
            </Typography>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Signup;
