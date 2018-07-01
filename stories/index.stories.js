import { storiesOf } from '@storybook/react';
import form from './form.stories';
import layout from './layout.stories';
import { SimpleAlertStory, SuccessAlertStory } from './alert.stories';

storiesOf('Form', module)
  .add('Simple Form', form)
  .add('Layout Components', layout);

storiesOf('Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Success Alert', SuccessAlertStory);
