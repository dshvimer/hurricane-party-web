import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class Example extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography>
            {this.props.text}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Example
