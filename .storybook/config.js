const { configure, addDecorator } = require('@storybook/react');
const decorator = require('../stories/emotion-decorator').default;
addDecorator(decorator);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(
    (filename) => {
      req(filename);
    });
}

configure(loadStories, module);
