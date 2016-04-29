import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../src/components/Button/Button';
import CheckIcon from '../src/components/Icon/CheckIcon/CheckIcon';

storiesOf('Button', module)
  .add('default', () => (
    <Button />
  ))
  .add('with text', () => (
    <Button>My Button</Button>
  ))
  .add('with icon', () => (
    <Button><CheckIcon />My Button with Icon</Button>
  ));
