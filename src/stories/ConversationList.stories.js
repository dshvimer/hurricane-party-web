import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import ConversationList from '../components/ConversationList'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('ConversationList', module)
  .add('first story', () => (
    <ConversationList/>
  ))