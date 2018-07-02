import { storiesOf } from '@storybook/react';
import form from './form.stories';
import layout from './layout.stories';
import { SimpleAlertStory, SuccessAlertStory } from './alert.stories';
import { Example1, Example2, Example3, Example4, Example5, } from './badge.stories';

storiesOf('Form', module)
  .add('Simple Form', form)
  .add('Layout Components', layout);
storiesOf('Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Success Alert', SuccessAlertStory);
storiesOf('Badge', module)
  .add('Badge', Example1)
  .add('Notification', Example2)
  .add('Contextual variations', Example3)
  .add('Pills', Example4)
  .add('Links', Example5);
