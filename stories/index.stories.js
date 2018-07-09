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
import buttonGroupStories from './button-group.stories';
import ButtonReadme from '../lib/button/README.md';
import ButtonGroupReadme from '../lib/button-group/README.md';
import DropdownReadme from '../lib/dropdown/README.md';
import dropdownStories from './dropdown.stories';
import {
  SimpleAlertStory,
  SuccessAlertStory,
  AlertWithLinkStory,
} from './alert.stories';
import { BreadcrumbStory } from './breadcrumb.stories';

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
storiesOf('Breadcrumb', module).add('Breadcrumb', BreadcrumbStory);

buttonStories.forEach(function (entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Buttons', module).addDecorator(withReadme(ButtonReadme)));

buttonGroupStories.forEach(function (entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Button Group', module).addDecorator(withReadme(ButtonGroupReadme)));

dropdownStories.forEach(function (entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Dropdowns', module).addDecorator(withReadme(DropdownReadme)));
