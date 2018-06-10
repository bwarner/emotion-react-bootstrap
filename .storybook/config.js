import { configure, addDecorator } from '@storybook/react';
import decorator from '../stories/emotion-decorator';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(decorator);
configure(loadStories, module);
