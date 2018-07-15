import React from 'react';
import { Badge, Button } from '../lib';
import Description from './description';

function Example1() {
  return (
    <Description
      title="Example"
      summary="Badges scale to match the size of the immediate parent element by using relative font sizing and em units."
    >
      <h1>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h1>
      <h2>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h2>
      <h3>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h3>
      <h4>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h4>
      <h5>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h5>
      <h6>
        Heading
        {' '}
        <Badge color="secondary">
New
        </Badge>
      </h6>
    </Description>
  );
}

function Example2() {
  return (
    <Description
      title="Notifications"
      summary="Badges can be used as part of links or buttons to provide a counter."
    >
      <Button color="primary" outline>
        Notifications
        {' '}
        <Badge color="secondary">
4
        </Badge>
      </Button>
    </Description>
  );
}

function Example3() {
  return (
    <Description
      title="Contextual variations"
      summary="Add any of the below mentioned modifier classes to change the appearance of a badge"
    >
      <Badge color="primary">
Primary
      </Badge>
      <Badge color="secondary">
Secondary
      </Badge>
      <Badge color="success">
Success
      </Badge>
      <Badge color="danger">
Danger
      </Badge>
      <Badge color="warning">
Warning
      </Badge>
      <Badge color="info">
Info
      </Badge>
      <Badge color="light">
Light
      </Badge>
      <Badge color="dark">
Dark
      </Badge>
    </Description>
  );
}

function Example4() {
  return (
    <Description
      title="Pill badges"
      summary="Use the pill attribute to make badges more rounded (with a larger border-radius and additional horizontal padding)."
    >
      <Badge color="primary" pill>
        Primary
      </Badge>
      <Badge color="secondary" pill>
        Secondary
      </Badge>
      <Badge color="success" pill>
        Success
      </Badge>
      <Badge color="danger" pill>
        Danger
      </Badge>
      <Badge color="warning" pill>
        Warning
      </Badge>
      <Badge color="info" pill>
        Info
      </Badge>
      <Badge color="light" pill>
        Light
      </Badge>
      <Badge color="dark" pill>
        Dark
      </Badge>
    </Description>
  );
}

function Example5() {
  return (
    <Description
      title="Links"
      summary="Using the contextual color names on an <a> provides actionable badges with hover and focus states."
    >
      <Badge href="#" color="primary">
        Primary
      </Badge>
      <Badge href="#" color="secondary">
        Secondary
      </Badge>
      <Badge href="#" color="success">
        Success
      </Badge>
      <Badge href="#" color="danger">
        Danger
      </Badge>
      <Badge href="#" color="warning">
        Warning
      </Badge>
      <Badge href="#" color="info">
        Info
      </Badge>
      <Badge href="#" color="light">
        Light
      </Badge>
      <Badge href="#" color="dark">
        Dark
      </Badge>
    </Description>
  );
}

export {
  Example1, Example2, Example3, Example4, Example5,
};
