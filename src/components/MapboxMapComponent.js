// ES6
import React from 'react'
import ReactMapboxGl, { Layer,  Source } from "react-mapbox-gl";

 //remove touch mouse controls

const AERIS_ID = process.env.REACT_APP_AERIS_ID || process.env.STORYBOOK_AERIS_ID
const AERIS_KEY = process.env.REACT_APP_AERIS_KEY || process.env.STORYBOOK_AERIS_KEY
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || process.env.STORYBOOK_MAPBOX_TOKEN

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN
})

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    `https://maps1.aerisapi.com/${AERIS_ID}_${AERIS_KEY}/radar/{z}/{x}/{y}/current.png`,
    `https://maps2.aerisapi.com/${AERIS_ID}_${AERIS_KEY}/radar/{z}/{x}/{y}/current.png`,
    `https://maps3.aerisapi.com/${AERIS_ID}_${AERIS_KEY}/radar/{z}/{x}/{y}/current.png`,
    `https://maps4.aerisapi.com/${AERIS_ID}_${AERIS_KEY}/radar/{z}/{x}/{y}/current.png`
  ],
  "tileSize": 256
}

class MapboxMapComponent extends React.Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v10"
        scrollZoom={false}
        center = {[-81, 28]}
        zoom={[5.9]}
        containerStyle={{
          height: "90vh",
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
