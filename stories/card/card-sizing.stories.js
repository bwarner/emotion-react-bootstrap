import React from 'react';
import {
  Card, Button, CardTitle, CardText, Row, Col,
} from '../../index';

const Example = () => (
  <Row>
    <Col sm="6">
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </Card>
    </Col>
  </Row>
);

export default Example;
