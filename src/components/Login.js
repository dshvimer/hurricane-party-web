import React from "react";
import "./Login.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <Card className="cardcss">
          <header className="header">
            <img src="./hurricaneparty.png" alt="logo" />
          </header>
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
          <br />
          <br />
          <Button
            style={{
              fontSize: "13px",
              opacity: 0.8
            }}
            variant="contained"
          >
            Login
          </Button>
        </Card>
        <Card className="cardcss2">
          <br />
          <Typography variant="body2" gutterBottom>
            Don't have an account? Sign-up here!
          </Typography>
        </Card>
      </div>
    );
  }
}

export default Login;
