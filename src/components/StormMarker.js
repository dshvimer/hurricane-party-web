import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


class StormMarker extends React.Component {

  markerLocation = {
    latitude: 0,
    longitude: 0,
  }
  
  render() {
    return (
      <Card>
        <CardContent>
          <Typography>      
            {this.props.text      
                //need to know what to do here what kind of card content do we want?
            }
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default StormMarker