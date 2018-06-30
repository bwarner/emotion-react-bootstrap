import { storiesOf } from '@storybook/react';
import form from './form.stories';
import layout from './layout.stories';
import alert from './alert.stories';

storiesOf('Form', module)
  .add('Simple Form', form)
  .add('Layout Components', layout);

storiesOf('Alert', module).add('Simple Alert', alert);
