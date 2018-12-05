/* import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class StripeIntegration extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeIntegration; 

        !!For use with  react-stripe-elements
*/

import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

import { Card, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY || process.env.STORYBOOK_STRIPE_KEY


export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <Card className="cardcss2">
          <header className="header" />
          <Grid container justify="space-evenly" alignItems="stretch">
          <CardContent>
            <StripeCheckout
                token={this.onToken}
                stripeKey={STRIPE_KEY}       //Api key from -- https://dashboard.stripe.com/account/apikeys
            />
          </CardContent>
          </Grid>
        </Card>
      
    )
  }
}


/*

'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  */
