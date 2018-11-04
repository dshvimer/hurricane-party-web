import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import MapboxMapComponent from '../components/MapboxMapComponent'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('MapboxMapComponent', module)
  .add('first story', () => (
    <MapboxMapComponent/>
  ))
  
