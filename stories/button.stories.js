import React from 'react';
import { Button } from '../lib/buttons';
import Description from './description';


function Example1() {
  return (
    <Description title="Buttons" summary="Therea are several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.">
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
    </Description>
  );
}

function Example2() {
  return (
    <Description title="Outline Buttons" summary="Buttons with clear background">
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </Description>
  );
}

function Example3() {
  return (
    <Description title="Sizes" summary="Fancy larger or smaller buttons">
      <fieldset>
        <legend>Large</legend>
        <Button color="primary" size="lg">Large Button</Button>{' '}
        <Button color="secondary" size="lg">Large Button</Button>
      </fieldset>
      <fieldset>
        <legend>Small</legend>
        <Button color="primary" size="sm">Small Button</Button>{' '}
        <Button color="secondary" size="sm">Small Button</Button>
      </fieldset>
      <fieldset>
        <legend>Block</legend>
        <Button color="primary" size="sm" block>Small Button</Button>{' '}
        <Button color="secondary" size="sm" block>Small Button</Button>
      </fieldset>
    </Description>
  );
}


function Example4() {
  return (
    <Description title="Active State" summary="Active Buttons">
      <Button color="primary" size="sm" block>Small Button</Button>{' '}
      <Button color="secondary" size="sm" block>Small Button</Button>
    </Description>
  );
}

function Example5() {
  return (
    <Description title="Disabled State" summary="Disabled Buttons">
      <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
      <Button color="secondary" size="lg" disabled>Button</Button>
    </Description>
  );
}

export default [
  { name: 'Buttons', story: Example1 },
  { name: 'Outline Buttons', story: Example2 },
  { name: 'Sizes', story: Example3 },
  { name: 'Active State', story: Example4 },
  { name: 'Disabled State', story: Example5 },
];
