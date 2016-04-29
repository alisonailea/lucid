import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';
import CheckIcon from '../Icon/CheckIcon/CheckIcon';
import buttonStyles from './Button.less';
import iconStyles from '../Icon/Icon.less';

const types = [ 'isDisabled', 'isActive' ];

storiesOf('Button', module)
  .add('default', () => (
    <Button className={buttonStyles['lucid-Button']}>My Button</Button>
  ))
  .add('with icon', () => (
    <Button className={buttonStyles['lucid-Button']}><CheckIcon className={iconStyles['lucid-Icon']} />My Button</Button>
  ))
  .add('short', () => (
    <Button className={buttonStyles['lucid-Button']} size='short'>My Button</Button>
  ))
  .add('small', () => (
    <Button className={buttonStyles['lucid-Button']} size='small'>My Button</Button>
  ))
  .add('large', () => (
    <Button className={buttonStyles['lucid-Button']} size='large'>My Button</Button>
  ));
