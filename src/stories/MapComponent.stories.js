import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import MyFancyComponent from '../components/MapComponent'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('MapComponent', module)
  .add('first story', () => (
    <MyFancyComponent/>
  ))
  
