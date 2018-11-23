import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import GetAddressSearchBarLocation from '../components/GetAddressSearchBarLocation'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('GetAddressSearchBarLocation', module)
  .add('first story', () => (
    <GetAddressSearchBarLocation/>
  ))
  
