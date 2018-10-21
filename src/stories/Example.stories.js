import React from 'react';

import { storiesOf } from '@storybook/react'


// Here is wehre the component we built gets imported
import Example from '../components/Example'

// Here we create stories for the component
// We can use it like its HTML. Thats because React uses JSX
storiesOf('Example', module)
  .add('first story', () => (
    <Example text='first exmaple'/>
  ))
  .add('second story', () => (
    <Example text='second example'>
    </Example>
  ))
