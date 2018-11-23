import React from "react";
import "./Login.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
       <Grid container justify="center" alignItems="center">
      
        <Card className="cardcss">
        <Grid container justify="center" alignItems="center">

          <CardContent>
            <TextField label="Email" inputType="email" name="email" />
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
            Login
          </Button>
          </Grid>
         
        </Card>
        </Grid>
        <br />
        <Grid container justify="center" alignItems="center">
        <Card className="cardcss2">
          <br />
          <Grid container justify="center" alignItems="center">
          <Typography variant="body2" gutterBottom>
            Don't have an account? Sign-up here!
          </Typography>
          </Grid>
        </Card>
        </Grid>
      </div>
    );
  }
}

export default Login;
