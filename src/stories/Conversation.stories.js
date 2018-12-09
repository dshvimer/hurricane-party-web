import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import Conversation from '../components/Conversation'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('Conversation', module)
  .add('first story', () => (
    <Conversation/>
  ))


