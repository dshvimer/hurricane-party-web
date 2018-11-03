import React from "react"
import axios from "axios"

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,

  }),
  withScriptjs,
  withGoogleMap, 

)((props) =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 28, lng: -81 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  async getHurricanes(){

    try {
      const response = await axios.get('https://api.aerisapi.com/tropicalcyclones/?&filter=atlantic&fields=track,position&limit=1&format=json&client_id=hrpGkmHHfpY7REeArosEn&client_secret=5H3Pa7qgeaFtjOyUQkO8OrVNyDaHYSj7QOGJ0jxC')
      console.log(response)
    }
    catch (error){

      console.log(error)
      
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
    this.getHurricanes()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
      
    )
  }
}


export default MyFancyComponent