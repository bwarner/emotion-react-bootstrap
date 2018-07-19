import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import form from './form.stories';
import FormReadme from '../lib/form/README.md';
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
import { FadeStory } from './fade.stories';
import {
  SimpleAlertStory,
  ColorsAlertStory,
  AlertContentStory,
  AlertWithLinkStory,
  AlertDismissStory,
} from './alert.stories';
import { AlertFadelessStory } from './alert.fadeless.stories';
import { BreadcrumbStory } from './breadcrumb.stories';
import BreadcrumbReadme from '../lib/breadcrumb/README.md';
import TableSimpleStory from './table.stories';
import TableReadme from '../lib/table/README.md';
import {
  PaginationStory,
  PaginationActiveStory,
  PaginationDisabledStory,
  PaginationLargeStory,
  PaginationSmallStory,
} from './pagination.stories';
import PaginationReadme from '../lib/pagination/README.md';
import JumbotronExample1 from './jumbotron.stories';
import JumbotronReadme from '../lib/jumbotron/README.md';

storiesOf('Form', module)
  .addDecorator(withReadme(FormReadme))
  .add('Simple Form', form)
  .add('Layout Components', layout);

storiesOf('Fade', module).add('Simple', FadeStory);

storiesOf('Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Alert Colors', ColorsAlertStory)
  .add('Alert with content', AlertContentStory)
  .add('Alert with link', AlertWithLinkStory)
  .add('Alert with dismiss', AlertDismissStory)
  .add('Alert with dismiss no fade', AlertFadelessStory);

storiesOf('Badge', module)
  .addDecorator(withReadme(BadgeReadme))
  .add('Example', Example1)
  .add('Notifications', Example2)
  .add('Contextual variations', Example3)
  .add('Pills', Example4)
  .add('Links', Example5);
storiesOf('Breadcrumb', module)
  .addDecorator(withReadme(BreadcrumbReadme))
  .add('Breadcrumb', BreadcrumbStory);

storiesOf('Table', module)
  .addDecorator(withReadme(TableReadme))
  .add('Simple', TableSimpleStory);

buttonStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Buttons', module).addDecorator(withReadme(ButtonReadme)));

buttonGroupStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Button Group', module).addDecorator(withReadme(ButtonGroupReadme)));

dropdownStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Dropdowns', module).addDecorator(withReadme(DropdownReadme)));

storiesOf('Pagination', module)
  .addDecorator(withReadme(PaginationReadme))
  .add('Pagination Simple', PaginationStory)
  .add('Pagination Active', PaginationActiveStory)
  .add('Pagination Disabled', PaginationDisabledStory)
  .add('Pagination Large', PaginationLargeStory)
  .add('Pagination Small', PaginationSmallStory);

storiesOf('Jumbotron', module)
  .addDecorator(withReadme(JumbotronReadme))
  .add('Example', JumbotronExample1);
