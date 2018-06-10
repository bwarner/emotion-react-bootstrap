import { storiesOf } from '@storybook/react';
import form from './form.stories';
import layout from './layout.stories';

storiesOf('Form', module)
  .add('Simple Form', form)
  .add('Layout Components', layout);
