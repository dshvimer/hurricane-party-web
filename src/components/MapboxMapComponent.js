// ES6
import React from 'react'
import ReactMapboxGl, { Layer,  Source } from "react-mapbox-gl";

 //remove touch mouse controls

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoia2V2aW5sZWFyeSIsImEiOiJjam5oeWZqd28waXdzM3dxdGg3YTdmaGM5In0.eThTxwPT5a4LF5YA5NiRZA"
})

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    'https://maps1.aerisapi.com/[ID]_[KEY]/radar/{z}/{x}/{y}/current.png',
    'https://maps2.aerisapi.com/_/radar/{z}/{x}/{y}/current.png',
    'https://maps3.aerisapi.com/_/radar/{z}/{x}/{y}/current.png',
    'https://maps4.aerisapi.com/_/radar/{z}/{x}/{y}/current.png'
  ],
  "tileSize": 256
}

class MapboxMapComponent extends React.Component {

    render() {
      return (
        <Map
            style="mapbox://styles/mapbox/streets-v10"
            center = {[-81, 28]}
            zoom={[5.9]}
            containerStyle={{
                height: "100vh",
                width: "100vw"
            }}>
            <Source
                id="radar-source" 
                tileJsonSource={RASTER_SOURCE_OPTIONS}>
            </Source>

            <Layer
                type="raster"
                id="radar-layer"
                sourceId="radar-source">
            </Layer>

        </Map>
      )
    }
  }
  
  export default MapboxMapComponent