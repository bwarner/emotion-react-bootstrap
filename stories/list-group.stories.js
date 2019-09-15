import React from 'react';
import { justifyContentBetween } from '@farvisionllc/emotion-bootstrap';
import {
  Badge,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from '../index';

const Example1 = () => (
  <ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
);

const Example2 = () => (
  <ListGroup>
    <ListGroupItem className={justifyContentBetween}>
      Cras justo odio
      {' '}
      <Badge pill>14</Badge>
    </ListGroupItem>
    <ListGroupItem className={justifyContentBetween}>
      Dapibus ac facilisis in
      {' '}
      <Badge pill>2</Badge>
    </ListGroupItem>
    <ListGroupItem className={justifyContentBetween}>
      Morbi leo risus
      {' '}
      <Badge pill>1</Badge>
    </ListGroupItem>
  </ListGroup>
);
const Example3 = () => (
  <ListGroup>
    <ListGroupItem disabled tag="a" href="#">
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
);
const Example4 = () => (
  <div>
    <h3>Anchors </h3>
    <ListGroupItemText>
      Be sure to
      {' '}
      <ListGroupItemHeading>
        not use the standard
        {' '}
        <code>.btn</code>
        {' '}
classes here
      </ListGroupItemHeading>
      .
    </ListGroupItemText>
    <ListGroup>
      <ListGroupItem active tag="a" href="#" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem disabled tag="a" href="#" action>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
    <ListGroupItemText />
    <h3>Buttons </h3>
    <ListGroup>
      <ListGroupItem active tag="button" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem disabled tag="button" action>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  </div>
);
const Example5 = () => (
  <ListGroup>
    <ListGroupItem color="success">Cras justo odio</ListGroupItem>
    <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
    <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
  </ListGroup>
);

const Example6 = () => (
  <ListGroup>
    <ListGroupItem active>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </ListGroupItemText>
    </ListGroupItem>
  </ListGroup>
);

const Example7 = () => (
  <ListGroup flush>
    <ListGroupItem disabled tag="a" href="#">
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem tag="a" href="#">
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
);

export default [
  { name: 'List Group', story: Example1 },
  { name: 'Tags', story: Example2 },
  { name: 'Disabled items', story: Example3 },
  { name: 'Anchors and buttons', story: () => <Example4 /> },
  { name: 'Contextual classes', story: () => <Example5 /> },
  { name: 'Custom content', story: () => <Example6 /> },
  { name: 'Flush', story: () => <Example7 /> },
];
