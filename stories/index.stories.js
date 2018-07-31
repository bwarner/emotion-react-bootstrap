import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import formStories from './form.stories';
import FormReadme from '../lib/form/README.md';
import layout from './layout.stories';
import LayoutReadme from '../lib/layout/README.md';
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
import tableStories from './table.stories';
import TableReadme from '../lib/table/README.md';
import {
  PaginationStory,
  PaginationActiveStory,
  PaginationDisabledStory,
  PaginationLargeStory,
  PaginationSmallStory,
} from './pagination.stories';
import PaginationReadme from '../lib/pagination/README.md';
import jumbotronStories from './jumbotron.stories';
import JumbotronReadme from '../lib/jumbotron/README.md';
import CarouselStory from './carousel.stories';
import CarouselReadme from '../lib/carousel/README.md';
import CollapseStory from './collapse.stories';
import CollapseReadme from '../lib/collapse/README.md';
import inputGroupStories from './input-group.stories';
import InputGroupReadme from '../lib/input-group/README.md';
import cardStories from './card';
import CardReadme from '../lib/card/README.md';
import listGroupStories from './list-group.stories';
import ListGroupReadme from '../lib/list-group/README.md';
import mediaStories from './media.stories';
import modalStories from './modal.stories';
import ModalReadme from '../lib/modal/README.md';
import navStories from './nav.stories';
import navReadme from '../lib/nav/README.md';

modalStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Modal', module).addDecorator(withReadme(ModalReadme)));

mediaStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Layout/Media', module));

storiesOf('Layout', module)
  .addDecorator(withReadme(LayoutReadme))
  .add('Grid', layout);

tableStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Tables', module).addDecorator(
  withReadme(TableReadme),
));

storiesOf('Components/Alert', module)
  .add('Simple Alert', SimpleAlertStory)
  .add('Alert Colors', ColorsAlertStory)
  .add('Alert with content', AlertContentStory)
  .add('Alert with link', AlertWithLinkStory)
  .add('Alert with dismiss', AlertDismissStory)
  .add('Alert with dismiss no fade', AlertFadelessStory);

storiesOf('Components/Badge', module)
  .addDecorator(withReadme(BadgeReadme))
  .add('Example', Example1)
  .add('Notifications', Example2)
  .add('Contextual variations', Example3)
  .add('Pills', Example4)
  .add('Links', Example5);

storiesOf('Components/Breadcrumb', module)
  .addDecorator(withReadme(BreadcrumbReadme))
  .add('Breadcrumb', BreadcrumbStory);

buttonStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Buttons', module).addDecorator(
  withReadme(ButtonReadme),
));

buttonGroupStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Button Group', module).addDecorator(
  withReadme(ButtonGroupReadme),
));

cardStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Card', module).addDecorator(withReadme(CardReadme)));

dropdownStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Dropdowns', module).addDecorator(
  withReadme(DropdownReadme),
));

storiesOf('Components/Fade', module).add('Simple', FadeStory);

formStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Form', module).addDecorator(withReadme(FormReadme)));

inputGroupStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Input Group', module).addDecorator(
  withReadme(InputGroupReadme),
));

listGroupStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/List Group', module).addDecorator(
  withReadme(ListGroupReadme),
));

storiesOf('Components/Pagination', module)
  .addDecorator(withReadme(PaginationReadme))
  .add('Pagination Simple', PaginationStory)
  .add('Pagination Active', PaginationActiveStory)
  .add('Pagination Disabled', PaginationDisabledStory)
  .add('Pagination Large', PaginationLargeStory)
  .add('Pagination Small', PaginationSmallStory);

storiesOf('Components/Carousel', module)
  .addDecorator(withReadme(CarouselReadme))
  .add('Example', CarouselStory);

storiesOf('Components/Collapse', module)
  .addDecorator(withReadme(CollapseReadme))
  .add('Example', CollapseStory);

jumbotronStories.forEach(function cb(entry) {
  this.add(entry.name, entry.story);
}, storiesOf('Components/Jumbotron', module).addDecorator(
  withReadme(JumbotronReadme),
));

storiesOf('Components/Nav', module)
  .addDecorator(withReadme(navReadme))
  .add('Example', navStories);
