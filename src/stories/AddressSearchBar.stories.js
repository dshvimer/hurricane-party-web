import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import AddressSearchBar from '../components/AddressSearchBar'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('AddressSearchBar', module)
  .add('first story', () => (
    <AddressSearchBar/>
  ))
  
