import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import form from './form.stories';
import layout from './layout.stories';
import BadgeReadme from '../lib/badge/README.md';
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
} from './badge.stories';
import buttonStories from './button.stories';
import ButtonReadme from '../lib/buttons/README.md';
import { FadeStory } from './fade.stories';

import {
  SimpleAlertStory,
  SuccessAlertStory,
  AlertWithLinkStory,
} from './alert.stories';

storiesOf('Form', module)
  .add('Simple Form', form)
  .add('Layout Components', layout);
storiesOf('Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Success Alert', SuccessAlertStory)
  .add('Alert with link', AlertWithLinkStory);
storiesOf('Badge', module)
  .addDecorator(withReadme(BadgeReadme))
  .add('Example', Example1)
  .add('Notifications', Example2)
  .add('Contextual variations', Example3)
  .add('Pills', Example4)
  .add('Links', Example5);

buttonStories.forEach(function (entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Buttons', module).addDecorator(withReadme(ButtonReadme)));

storiesOf('Fade', module).add('Simple', FadeStory);
